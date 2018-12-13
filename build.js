yaml = require('js-yaml');
fs   = require('fs');
mv   = require('mv');
 
// Get document, or throw exception on error
try {
  var jekyllInstances = yaml.safeLoad(fs.readFileSync('./examples.yml', 'utf8'));
  var execSync = require('child_process').execSync;
  
  for (var i = 0; i < jekyllInstances.length; i++) {
    var dir = jekyllInstances[i]
    console.log(`\n\nBuilding ${dir}\n\n`)
    execSync(`cd ${dir} && yarn && yarn run build`);
    
    mv(`${dir}/_site`, `public/${dir}/`, {mkdirp: true}, function(err) {
      if (err) {
        console.log(err)
      }
    });
  }
  
} catch (e) {
  console.log(e);
}

