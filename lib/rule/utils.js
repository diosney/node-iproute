// Rule types.
exports.types = {
  unicast    : 'unicast',         // The rule prescribes to return the route found in the routing table referenced by the rule.
  blackhole  : 'blackhole',       // The rule prescribes to silently drop the packet.
  unreachable: 'unreachable',     // The rule prescribes to generate a 'Network is unreachable' error.
  prohibit   : 'prohibit',        // The rule prescribes to generate 'Communication is administratively prohibited' error.
  nat        : 'nat'              // The rule prescribes to translate the source address of the IP packet into some other value.
};

/**
 * General utilities functions.
 *
 * @param raw_data
 * @returns {Array}
 */
exports.parse_rules = function (raw_data) {
  if (!raw_data) {
    throw new Error('Parsing Error: Invalid arguments: ' + raw_data);
  }
  else {
    /*
     * Process the output to give parsed results.
     */
    var rules = [];

    var output = raw_data.split('\n');

    for (var line = 0, output_length = output.length - 1;
         line < output_length;
         line++) {

      var rule_line = output[line];
      var rule_fields = rule_line.trim().split(/\s/g);

      var rule = {
        priority: rule_fields[0].split(':')[0],
        type    : exports.types.unicast // The default value.
      };

      /*
       * Parses dynamically the rest of fields, if are there.
       */
      var rest_line_fields = rule_fields.slice(1);
      for (var i = 0, rest_line_length = rest_line_fields.length;
           i < rest_line_length;
           i += 2 /* Each field is composed for two consecutive items. */) {

        var next_field = rest_line_fields[i + 1];

        if (next_field) {
          rule[rest_line_fields[i]] = next_field;
        }
        else {
          rule.type = rest_line_fields[i];
        }
      }

      /*
       * Finally, add the parsed data to the output.
       */
      rules.push(rule);
    }

    return rules;
  }
};