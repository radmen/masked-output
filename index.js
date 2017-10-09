const prompt = require('prompt')

var schema = {
    properties: {
        password: {
            hidden: true,
            required: true,
            replace: '*'
        },
        fields: {
            description: 'list of required fields (comma separated)',
            pattern: /^[0-9,]+?$/,
            required: true
        },
    }
};

prompt.start()

prompt.get(schema, function (err, result) {
    if (err) {
        console.warn(err)
        process.exit(1)
    }

    const values = result.fields.split(',')
        .map(fieldNo => result.password[fieldNo - 1])
    
    console.log(values.join('\t'))
    process.exit(0)
})
