const companyList = 
    [
        {
          name: "Google",
          status: "Approved",
          info: {
            industry: "Internet",
            companySize: 10000,
            headquarters: "Mountain View, California",
            foundingYear: null,
            website: "https://careers.google.com/",
          },
          finances: {
            assets: 327095,
            liabilities: 97082,
            income: 17930,
            expenses: 16437,
          },
          contact:
            {
              picture:"https://randomuser.me/api/portraits/men/75.jpg",
              firstName: "Hector",
              lastName: "Smith",
              position: "Chief Internet Guy",
              phone: 4044044044,
              email: "drewA@gmail.com",
            }
        },
    
        {
          name: "no finances check",
          status: "Researching",
          info: {
            industry: "Pet Supplies",
            companySize: 100,
            headquarters: "Atlanta, Georgia",
            foundingYear: 2020,
            website: null,
          },
          contact: 
            {
              picture:"https://randomuser.me/api/portraits/men/74.jpg",
              firstName: "Zach",
              lastName: "Zebran",
              position: "Chief Internet Guy",
              phone: 4044044044,
              email: "zach@woofsnwags.com",
            },
           
        },
        {
          name: "no contacts check",
          status: "Researching",
          info: {
            industry: "Pet Supplies",
            companySize: 100,
            headquarters: "Atlanta, Georgia",
            foundingYear: 2020,
            website: null,
          },
          finances: {
            assets: 1200,
            liabilities: 900,
            income: 10000,
            expenses: 6000,
          },
        },
        {
          name: "half finances check",
          status: "Researching",
          info: {
            industry: "Pet Supplies",
            companySize: 100,
            headquarters: "Atlanta, Georgia",
            foundingYear: 2020,
            website: null,
          },
          finances: { assets: 1200, liabilities: 900 },
          contact: 
            {
              picture:"https://randomuser.me/api/portraits/women/75.jpg",
              firstName: "Betty",
              lastName: "Brown",
              position: "Applied Integration Officer",
              phone: 7707707700,
              email: "BettyB@gmail.com",
            },
           
        },
    
        {
          name: "no info check",
          status: "Researching",
          finances: {
            assets: 1200,
            liabilities: 900,
            income: 10000,
            expenses: 6000,
          },
          contact: 
            {
              picture: "data:image/jpeg;base64,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",
              firstName: "Brad",
              lastName: "Pitt",
              position: "Resident Pit Bull",
              phone: null,
              email: null,
            },
        },
      ]

      export default companyList;