# Migration guide

This document provides guidance on how to migrate from the [legacy version](https://github.com/talon-one/talon_one.js)
of the SDK to the latest version. Follow the steps below to ensure a smooth transition.

The next-gen version introduces several modernizations and simplifications, including a
new package name, a streamlined `Configuration` object, the move to TypeScript, the
retirement of model classes in favour of TypeScript interfaces and use of plain objects
for request data, updated API method signatures, and simplified effect handling.

While the SDK is written in TypeScript and provides full type definitions, it can still be
used from plain JavaScript projects.

## Changes

| Feature             | Legacy SDK (`talon_one`)                                                                               | Next-gen SDK (`talon_one_sdk`)                                         |
| ------------------- | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| **Package Name**    | `talon_one`                                                                                            | `talon_one_sdk`                                                        |
| **Configuration**   | `ApiClient.instance` singleton                                                                         | `Configuration` object                                                 |
| **Request Data**    | model classes with `constructFromObject` method.                                                       | Plain JavaScript/TypeScript objects + TypeScript interfaces            |
| **API Calls**       | Multiple positional arguments                                                                          | Single object with named parameters                                    |
| **Effect Handling** | Optional normalization/validation by constructing a props class (optional) using `constructFromObject` | Optional runtime validation via type guards, or direct property access |

## Step by step

Here is a step-by-step guide to migrating from the legacy Talon.One SDK to the new one.

### Step 1: Update SDK imports

The next-gen SDK uses a different import pattern. You need to adjust how you bring the SDK into
your project.

**Before**

```jsx
import { ApiClient, IntegrationApi, /* .... */ } from "talon_one";
```

**After**

```tsx
import { IntegrationApi, Configuration, /* .... */ } from "talon_one_sdk";
```

#### Key change

The package name has changed from `talon_one` to `talon_one_sdk`. Update your import
statements accordingly.

### Step 2: Modernize client configuration

The method for configuring the API client has been updated to use a `Configuration`
object, instead of setting singleton properties directly, which makes setup cleaner.

**Before**

```jsx
const defaultClient = ApiClient.instance;
defaultClient.basePath = "https://yourbaseurl.talon.one";

const api_key_v1 = defaultClient.authentications["api_key_v1"];
api_key_v1.apiKey = "YOUR_API_KEY";
api_key_v1.apiKeyPrefix = "ApiKey-v1";

const integrationApi = new IntegrationApi();
```

**After**

```tsx
const configuration = new Configuration({
    basePath: "https://yourbaseurl.talon.one",
    apiKey: (name: string) => {
        if (name === "Authorization") {
            // Unlike the legacy SDK, there is no separate apiKeyPrefix property. The full value (including ApiKey-v1)
            // must be returned by the apiKey function.
            return "ApiKey-v1 YOUR_API_KEY";
        }
        return "";
    }
});

const integrationApi = new IntegrationApi(configuration);
```

#### Key change

Instead of modifying a singleton instance, you now pass a configuration object directly to
the `IntegrationApi` constructor. The API key and its prefix are now handled by an
`apiKey` function.

### Step 3: Simplify request body creation

Creating request payloads is now much simpler. The next-gen SDK uses plain JavaScript objects
instead of requiring you to construct instances of specific classes. Model classes such as
NewCustomerSessionV2 and IntegrationRequest are no longer required.

**Before**

```jsx
const customerSession = NewCustomerSessionV2.constructFromObject({
  profileId: 'example_prof_id',
  // ... other properties
});

const integrationRequest = new IntegrationRequest(customerSession);
```

**After**

```tsx
const customerSession = {
  profileId: 'example_prof_id',
  // ... other properties
};

const integrationRequest = {
    customerSession
};
```

#### Key change

You can define your request data as a standard object. The `constructFromObject` and `new
IntegrationRequest()` calls are no longer needed.

### Step 4: Update API method calls

API method signatures have been changed to accept a single object with named parameters.
This improves readability and makes the API easier to use.

**Before**

```jsx
integrationApi.updateCustomerSessionV2(
  crypto.randomUUID(),
  integrationRequest
)
.then(/* ... */);
```

**After**

```tsx
integrationApi.updateCustomerSessionV2({
    customerSessionId: "example_integration_v2_id",
    integrationRequest
})
.then(/* ... */);
```

#### Key change

The `updateCustomerSessionV2` method now takes a single object with `customerSessionId`
and `integrationRequest` as properties.

### Step 5: Streamline effect handling

In the legacy SDK, you could optionally call `EffectProps.constructFromObject(...)` to
normalize/validate the shape of `effect.props` at runtime. In the next-gen SDK, the
`constructFromObject` helpers are removed. You can read `effect.props` directly, and if
you want runtime safety (for example, to guard against unexpected API payloads), use the
exported `instanceOf*EffectProps` type guard functions.

**Before**

```jsx
data.effects.forEach(effect => {
  switch(effect.effectType) {
    case 'setDiscount':
      const setDiscountProps = SetDiscountEffectProps.constructFromObject(effect.props);
      console.log(`Set a discount '${setDiscountProps.name}' of ${setDiscountProps.value}`);
      break;
    // ...
  }
});
```

**After**

```tsx
import { instanceOfSetDiscountEffectProps } from "talon_one_sdk";

data.effects.forEach(effect => {
  switch (effect.effectType) {
    case 'setDiscount':
      if (instanceOfSetDiscountEffectProps(effect.props)) {
          console.log(`Set a discount '${effect.props.name}' of ${effect.props.value}`);
      }
      break;
    // ...
  }
});
```

#### Key change

`constructFromObject` is removed. Read `effect.props` directly, and use
`instanceOf*EffectProps` type guards when you need runtime validation.
