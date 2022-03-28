
const openssl = require('openssl-nodejs')


openssl(`openssl genrsa -out ..\\certificados\\ca.key 2048`, 
    (buffer) => {
    if (buffer) {
        console.log("por aqui")
        openssl('openssl req -new -x509 -key .\\certificados\\ca.key -out .\\certificados\\ca.crt  -subj "/C=SP/ST=ALC/L=ALC/O=INF/CN=Testing CA"  -days 3600')
        console.log(buffer.toString())
    } 
})

// n = '001'
// openssl(`openssl req -nodes -newkey rsa:2048 -keyout certificados/server001.key -out certificados/server001.csr -subj "/C=SP/ST=ALC/L=ALICANTE/O=KUNGFU/OU=nT/CN=001.local`)
// openssl(`openssl x509 -req -in certificados/server001.csr -CA certificados/ca.crt -CAkey certificados/ca.key  -days 3600 -out certificados/server001.cert -CAserial certificados/ca.srl`)


// openssl genrsa -out certificados/ca.key 2048
// openssl req -new -x509 -key certificados/ca.key -out certificados/ca.crt  -subj "/C=SP/ST=ALC/L=ALC/O=INF/CN=Testing CA"  -days 3600
// openssl x509 -req -in certificados/server001.csr -CA certificados/ca.crt -CAkey certificados/ca.key  -days 3600 -out certificados/server001.crt -CAserial certificados/ca.srl
// openssl req -nodes -newkey rsa:2048 -keyout certificados\server001.key -out certificados\server001.csr -subj "/C=SP/ST=ALC/L=ALICANTE/O=KUNGFU/OU=nT/CN=001.local"

// curl -k -v https://001.local 