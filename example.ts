import pkg from "./dist/index.js";
const { IntegrationApi, Configuration } = pkg;

// Configure API client
const configuration = new Configuration({
    basePath: "http://localhost:9000",
    apiKey: (name: string) => {
        if (name === "Authorization") {
            return `ApiKey-v1 ${process.env.TALON_API_KEY || "your-api-key-here"}`;
        }
        return "";
    }
});

// Integration API example to send a session update
const integrationApi = new IntegrationApi(configuration);

// Initializing a customer session object
const customerSession = {
    profileId: 'example_prof_id',
    cartItems: [
        {
            name: 'Döner King',
            sku: 'kd-100',
            quantity: 1,
            price: 2.00,
            category: 'pizzas'
        },
        {
            name: 'Spezi 500ml',
            sku: 'sp-50',
            quantity: 1,
            price: 2,
            category: 'beverages'
        },
        {
            name: 'Queen Döner',
            sku: 'qd-100',
            quantity: 1,
            price: 2.50,
            category: 'pizzas'
        },
        {
            name: 'Club Mate 330ml',
            sku: 'cm-33',
            quantity: 1,
            price: 1.80,
            category: 'beverages'
        }
    ],
    couponCodes: [
        'Cool-Summer!'
    ]
};

// Initializing an integration request wrapping the customer session
const integrationRequest = {
    customerSession
};

// Optional list of requested information to be present on the response.
// See src/model/IntegrationRequest#ResponseContentEnum for full list of supported values
// integrationRequest.responseContent = [
//   'customerSession',
//   'customerProfile'
// ]

integrationApi
    .updateCustomerSessionV2({
        customerSessionId: "example_integration_v2_id",
        integrationRequest
    })
    .then(
        data => {
            console.log(JSON.stringify(data, null, 2));

            // Parsing the returned effects list, please consult https://developers.talon.one/Integration-API/handling-effects-v2 for the full list of effects and their corresponding properties
            data.effects?.forEach(effect => {
                switch (effect.effectType) {
                    case 'setDiscount':
                        // Access the specific effect's properties
                        console.log(`Set a discount '${effect.props.name}' of ${effect.props.value}`)
                        break
                    case 'rejectCoupon':
                        // Work with rejectCoupon effect properties
                        console.log('Coupon rejected')
                        break
                }
            })
        },
        err => {
            console.error(err);
        }
    );
