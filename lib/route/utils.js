// Route types.
exports.types = {
  unicast    : 'unicast',         // The route entry describes real paths to the destinations covered by the route prefix.
  unreachable: 'unreachable',     // These destinations are unreachable. Packets are discarded and the ICMP message host unreachable is generated. The local senders get an EHOSTUNREACH error.
  blackhole  : 'blackhole',       // These destinations are unreachable. Packets are discarded silently. The local senders get an EINVAL error.
  prohibit   : 'prohibit',        // These destinations are unreachable. Packets are discarded and the ICMP message communication administratively prohibited is generated. The local senders get an EACCES error.
  local      : 'local',           // The destinations are assigned to this host. The packets are looped back and delivered locally.
  broadcast  : 'broadcast',       // The destinations are broadcast addresses. The packets are sent as link broadcasts.
  throw      : 'throw',           // A special control route used together with policy rules. If such a route is selected, lookup in this table is terminated pretending that no route was found. Without policy routing it is equivalent to the absence of the route in the routing table. The packets are dropped and the ICMP message net unreachable is generated. The local senders get an ENETUNREACH error.
  nat        : 'nat',             // A special NAT route. Destinations covered by the prefix are considered to be dummy (or external) addresses which require translation to real (or internal) ones before forwarding. The addresses to translate to are selected with the attribute via. Warning: Route NAT is no longer supported in Linux 2.6.
  anycast    : 'anycast',         // Not implemented the destinations are anycast addresses assigned to this host. They are mainly equivalent to local with one difference: such addresses are invalid when used as the source address of any packet.
  multicast  : 'multicast'        // A special type used for multicast routing. It is not present in normal routing tables.
};

/**
 * General utilities functions.
 *
 * @param raw_data
 * @returns {Array}
 */
exports.parse_routes = function (raw_data) {
  if (!raw_data) {
    throw new Error('Parsing Error: Invalid arguments: ' + raw_data);
  }
  else {
    /*
     * Process the output to give parsed results.
     */
    var routes = [];

    var output = raw_data.split('\n');

    for (var line = 0, output_length = output.length - 1;
         line < output_length;
         line++) {

      var route_line = output[line];
      var route_fields = route_line.trim().split(/\s/g);

      // Remove the empty fields since they have no sense.
      route_fields = route_fields.filter(function (item) {
        return item != '';
      });

      if (route_fields.length % 2 != 0) {
        route_fields = [exports.types.unicast].concat(route_fields);
      }

      var route = {
        type: route_fields[0],
        to  : route_fields[1]
      };

      /*
       * Parses dynamically the fields.
       */
      var rest_line_fields = route_fields.slice(2);

      for (var i = 0, rest_line_fields_length = rest_line_fields.length;
           i < rest_line_fields_length;
           i += 2 /* Each field is composed for two consecutive items. */) {

        route[rest_line_fields[i]] = rest_line_fields[i + 1];
      }

      /*
       * Finally, add the parsed data to the output.
       */
      routes.push(route);
    }

    return routes;
  }
};