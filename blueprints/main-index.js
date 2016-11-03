module.exports = {
  name: 'ember-cli-yadda',
  description: 'ember-cli-yadda',
  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      { name: 'yadda',           source: '',                     target: '#>=0' },
    ]);
  }
};
