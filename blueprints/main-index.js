module.exports = {
  name: 'ember-cli-yadda',
  description: 'ember-cli-yadda',
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addPackageToProject('yadda')
    .then(()=> {
      return this.addAddonToProject('ember-browserify');
    });

    // return this.addBowerPackagesToProject([
    //   { name: 'yadda',           source: 'acuminous/yadda',                     target: '*' },
    // ]);
  }
};
