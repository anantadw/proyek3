const yargs = require('yargs')

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe:'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

// tidak muncul apapun, solusi tambahkan script di bawah
// sumber : https://stackoverflow.com/questions/52642759/yargs-help-not-displaying-all-the-help-options
yargs.parse()