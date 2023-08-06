
* En Readme, poner otra forma de adicionarle sudo a iproute,,, ej:
  * adduser --system



* coverage
* tests
  * unit
  * acceptance



- BREAKING CHANGES
  - la version de node, npm
  - npm link ahora usa --json
  - ver el cambio de atributos, q si camelCase o no
  - explanation de pq cambiar el estilo de codigo, y eso, y es q el ultimo update
    - fuede hace 6 an`os, cuando snake_case erea el standard mas difundido

- poner en documentacion 
  - q atributos son en el orden sensitive. 
  - _arg o _args el key no se pone.

  - como construir el objeto:
    - atributos con valores string y number con par key-value:
      - key: value   =>>  ip route ... key value ...
    - atributos tipo flags, estan o no estan, con booleanos:
      - key: true  =>> ip route ... key ...
      - key: false =>> 
        - si tiene prefijo "no":  ip route ... key ...
        - si no tiene prefijo "no", se le pone el prefijo: 
          - ip route ... nokey ...
        - si es al reves, pues es al reves, ej: si es nokey: true etc.
    - atributos con array como valores arrays, se tratan tipo tuplas:
      - key: [0, 1]  =>>  ip route ... key 0 1 ...
    - atributos tipo flags enum, con string normal
      - key: 'on'  =>> ip ... key on ...
    - como modelar?:
       - [ protodown_reason PREASON { on | off } ]


- jsonschema arreglar:
  - flags "key"/"nokey" como ponerlos, ahora mismo se pueden adicionar los 2 al
    - mismo tiempo y deberian ser exclusivos.

- Commands to add:
  - link
    - xstats
    - afstats
  - addrlabel
    
- add global option to disable schema validations? 

- poner en doc q despues de agregar una rule tiene q hacer: `ip route flush cache` o `ip route flush table cache`

- rellenar los return interfaces de los "show".