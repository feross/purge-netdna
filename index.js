/*jslint node: true */
"use strict";

var netdna = require('netdna')

module.exports = function (credentials) {
  if (!credentials.companyAlias) throw(new Error('Missing `companyAlias`!'))
  if (!credentials.consumerKey) throw(new Error('Missing `consumerKey`!'))
  if (!credentials.consumerSecret) throw(new Error('Missing `consumerSecret`!'))
  if (!credentials.zoneId) throw(new Error('Missing `zoneId`!'))

  netdna = netdna({
    companyAlias: credentials.companyAlias,
    consumerKey: credentials.consumerKey,
    consumerSecret: credentials.consumerSecret
  })

  var url = 'zones/pull.json/' + credentials.zoneId + '/cache'
  netdna.delete(url, function (err, response) {
    if (err || response.code !== 200) {
      throw(new Error('Unexpected NetDNA response code: ' + response.code))
    }
  })
}
