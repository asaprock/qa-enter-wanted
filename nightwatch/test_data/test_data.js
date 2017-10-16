module.exports = {
    transactions: {
        minimumEntry: {
            //the 'key' for the fields should match the key of the selectors in css_selectors
            fields: {
                hdr: '123456789',
                mke: 'MKE',
                oai: 'CHI1234SI',
                nam: 'Harry Dresden',
                sex: 'M',
                rac: 'W',
                hgt: '607',
                wgt: '200',
                hai: 'Brown',
                off: 'Arson',
                dow: '05022016',
                oln: '',
                ols: '',
                oly: '',
                lic: '',
                lis: '',
                liy: '',
            },
            results: {
                header: 'Valid',
                errorList: {},
                queryTitle: 'Assembled Query:',
                assembledQuery: '123456789.MKE.CHI1234SI.Harry Dresden.M.W.607.200.Brown.Arson.05022016......'
            }
        },
        olnOnly: {
            //the 'key' for the fields should match the key of the selectors in css_selectors
            fields: {
                hdr: '123456789',
                mke: 'MKE',
                oai: 'CHI1234SI',
                nam: 'Harry Dresden',
                sex: 'M',
                rac: 'W',
                hgt: '607',
                wgt: '200',
                hai: 'Brown',
                off: 'Arson',
                dow: '05022016',
                oln: '12345',
                ols: '',
                oly: '',
                lic: '',
                lis: '',
                liy: ''
            },
            results: {
                header: 'Errors Received:',
                errorList: {
                    oln: `If Operator's License Number, DL State, or DL Expiration Year are present, all three must be present.`
                },
                queryTitle: 'No results generated due to error.',
                assembledQuery: ''
            }
        },
        tooShort: {
            //the 'key' for the fields should match the key of the selectors in css_selectors
            fields: {
                hdr: '12345678',
                mke: 'M',
                oai: 'CHI1234S',
                nam: 'Ha',
                sex: 'G',
                rac: '.',
                hgt: '60',
                wgt: '20',
                hai: 'Br',
                off: 'Arso',
                dow: '0502201',
                oln: '',
                ols: '',
                oly: '',
                lic: '',
                lis: '',
                liy: ''
            },
            results: {
                header: 'Errors Received:',
                errorList: {
                    oln: `If Operator's License Number, DL State, or DL Expiration Year are present, all three must be present.`,
                    hdr: 'The "header" field should be between 9 and 19 characters long.',
                    mke: 'The "MKE" field should be between 2 and 4 characters long.',
                    oai: 'The "Originating Agency Identifier" field should be 9 characters long.',
                    nam: 'The "Name" field should be between 3 and 30 characters long.',
                    sex: 'The "Sex" field must be entered in as a single character, M for male, F for female, U for unknown.',
                    rac: 'The "Race" field can only include characters from the English Alphabet.',
                    hgt: 'The "Height" field should be 3 characters long.',
                    wgt: 'The "Weight" field should be 3 characters long.',
                    hai: 'The "Hair" field should be between 3 and 10 characters long.',
                    off: 'The "Offense" field should be between 5 and 15 characters long.',
                    dow: 'The "Date of Warrant/Violation" field should be 8 characters long."',
                    oln: '',
                    ols: '',
                    oly: '',
                    lic: '',
                    lis: '',
                    liy:''
                },
                queryTitle: 'No results generated due to error.',
                assembledQuery: ''
            }
        }
    }
}