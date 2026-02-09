# ManagementApi

All URIs are relative to *https://yourbaseurl.talon.one*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**activateUserByEmail**](ManagementApi.md#activateuserbyemail) | **POST** /v1/users/activate | Enable user by email address |
| [**addLoyaltyCardPoints**](ManagementApi.md#addloyaltycardpoints) | **PUT** /v1/loyalty_programs/{loyaltyProgramId}/cards/{loyaltyCardId}/add_points | Add points to card |
| [**addLoyaltyPoints**](ManagementApi.md#addloyaltypoints) | **PUT** /v1/loyalty_programs/{loyaltyProgramId}/profile/{integrationId}/add_points | Add points to customer profile |
| [**copyCampaignToApplications**](ManagementApi.md#copycampaigntoapplications) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/copy | Copy the campaign into the specified Application |
| [**createAccountCollection**](ManagementApi.md#createaccountcollection) | **POST** /v1/collections | Create account-level collection |
| [**createAchievement**](ManagementApi.md#createachievement) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/achievements | Create achievement |
| [**createAdditionalCost**](ManagementApi.md#createadditionalcost) | **POST** /v1/additional_costs | Create additional cost |
| [**createAttribute**](ManagementApi.md#createattribute) | **POST** /v1/attributes | Create custom attribute |
| [**createBatchLoyaltyCards**](ManagementApi.md#createbatchloyaltycards) | **POST** /v1/loyalty_programs/{loyaltyProgramId}/cards/batch | Create loyalty cards |
| [**createCampaignFromTemplate**](ManagementApi.md#createcampaignfromtemplate) | **POST** /v1/applications/{applicationId}/create_campaign_from_template | Create campaign from campaign template |
| [**createCampaignStoreBudget**](ManagementApi.md#createcampaignstorebudget) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/stores/budgets | Create campaign store budget |
| [**createCollection**](ManagementApi.md#createcollection) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/collections | Create campaign-level collection |
| [**createCoupons**](ManagementApi.md#createcoupons) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons | Create coupons |
| [**createCouponsAsync**](ManagementApi.md#createcouponsasync) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons_async | Create coupons asynchronously |
| [**createCouponsDeletionJob**](ManagementApi.md#createcouponsdeletionjob) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons_deletion_jobs | Creates a coupon deletion job |
| [**createCouponsForMultipleRecipients**](ManagementApi.md#createcouponsformultiplerecipients) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons_with_recipients | Create coupons for multiple recipients |
| [**createInviteEmail**](ManagementApi.md#createinviteemail) | **POST** /v1/invite_emails | Resend invitation email |
| [**createInviteV2**](ManagementApi.md#createinvitev2) | **POST** /v2/invites | Invite user |
| [**createPasswordRecoveryEmail**](ManagementApi.md#createpasswordrecoveryemail) | **POST** /v1/password_recovery_emails | Request a password reset |
| [**createSession**](ManagementApi.md#createsession) | **POST** /v1/sessions | Create session |
| [**createStore**](ManagementApi.md#createstore) | **POST** /v1/applications/{applicationId}/stores | Create store |
| [**deactivateUserByEmail**](ManagementApi.md#deactivateuserbyemail) | **POST** /v1/users/deactivate | Disable user by email address |
| [**deductLoyaltyCardPoints**](ManagementApi.md#deductloyaltycardpoints) | **PUT** /v1/loyalty_programs/{loyaltyProgramId}/cards/{loyaltyCardId}/deduct_points | Deduct points from card |
| [**deleteAccountCollection**](ManagementApi.md#deleteaccountcollection) | **DELETE** /v1/collections/{collectionId} | Delete account-level collection |
| [**deleteAchievement**](ManagementApi.md#deleteachievement) | **DELETE** /v1/applications/{applicationId}/campaigns/{campaignId}/achievements/{achievementId} | Delete achievement |
| [**deleteCampaign**](ManagementApi.md#deletecampaign) | **DELETE** /v1/applications/{applicationId}/campaigns/{campaignId} | Delete campaign |
| [**deleteCampaignStoreBudgets**](ManagementApi.md#deletecampaignstorebudgets) | **DELETE** /v1/applications/{applicationId}/campaigns/{campaignId}/stores/budgets | Delete campaign store budgets |
| [**deleteCollection**](ManagementApi.md#deletecollection) | **DELETE** /v1/applications/{applicationId}/campaigns/{campaignId}/collections/{collectionId} | Delete campaign-level collection |
| [**deleteCoupon**](ManagementApi.md#deletecoupon) | **DELETE** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons/{couponId} | Delete coupon |
| [**deleteCoupons**](ManagementApi.md#deletecoupons) | **DELETE** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons | Delete coupons |
| [**deleteLoyaltyCard**](ManagementApi.md#deleteloyaltycard) | **DELETE** /v1/loyalty_programs/{loyaltyProgramId}/cards/{loyaltyCardId} | Delete loyalty card |
| [**deleteReferral**](ManagementApi.md#deletereferral) | **DELETE** /v1/applications/{applicationId}/campaigns/{campaignId}/referrals/{referralId} | Delete referral |
| [**deleteStore**](ManagementApi.md#deletestore) | **DELETE** /v1/applications/{applicationId}/stores/{storeId} | Delete store |
| [**deleteUser**](ManagementApi.md#deleteuser) | **DELETE** /v1/users/{userId} | Delete user |
| [**deleteUserByEmail**](ManagementApi.md#deleteuserbyemail) | **POST** /v1/users/delete | Delete user by email address |
| [**destroySession**](ManagementApi.md#destroysession) | **DELETE** /v1/sessions | Destroy session |
| [**disconnectCampaignStores**](ManagementApi.md#disconnectcampaignstores) | **DELETE** /v1/applications/{applicationId}/campaigns/{campaignId}/stores | Disconnect stores |
| [**exportAccountCollectionItems**](ManagementApi.md#exportaccountcollectionitems) | **GET** /v1/collections/{collectionId}/export | Export account-level collection\&#39;s items |
| [**exportAchievements**](ManagementApi.md#exportachievements) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/achievements/{achievementId}/export | Export achievement customer data |
| [**exportAudiencesMemberships**](ManagementApi.md#exportaudiencesmemberships) | **GET** /v1/audiences/{audienceId}/memberships/export | Export audience members |
| [**exportCampaignStoreBudgets**](ManagementApi.md#exportcampaignstorebudgets) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/stores/budgets/export | Export campaign store budgets |
| [**exportCampaignStores**](ManagementApi.md#exportcampaignstores) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/stores/export | Export stores |
| [**exportCollectionItems**](ManagementApi.md#exportcollectionitems) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/collections/{collectionId}/export | Export campaign-level collection\&#39;s items |
| [**exportCoupons**](ManagementApi.md#exportcoupons) | **GET** /v1/applications/{applicationId}/export_coupons | Export coupons |
| [**exportCustomerSessions**](ManagementApi.md#exportcustomersessions) | **GET** /v1/applications/{applicationId}/export_customer_sessions | Export customer sessions |
| [**exportCustomersTiers**](ManagementApi.md#exportcustomerstiers) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/export_customers_tiers | Export customers\&#39; tier data |
| [**exportEffects**](ManagementApi.md#exporteffects) | **GET** /v1/applications/{applicationId}/export_effects | Export triggered effects |
| [**exportLoyaltyBalance**](ManagementApi.md#exportloyaltybalance) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/export_customer_balance | Export customer loyalty balance to CSV |
| [**exportLoyaltyBalances**](ManagementApi.md#exportloyaltybalances) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/export_customer_balances | Export customer loyalty balances |
| [**exportLoyaltyCardBalances**](ManagementApi.md#exportloyaltycardbalances) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/export_card_balances | Export all card transaction logs |
| [**exportLoyaltyCardLedger**](ManagementApi.md#exportloyaltycardledger) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/cards/{loyaltyCardId}/export_log | Export card\&#39;s ledger log |
| [**exportLoyaltyCards**](ManagementApi.md#exportloyaltycards) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/cards/export | Export loyalty cards |
| [**exportLoyaltyLedger**](ManagementApi.md#exportloyaltyledger) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/profile/{integrationId}/export_log | Export customer\&#39;s transaction logs |
| [**exportPoolGiveaways**](ManagementApi.md#exportpoolgiveaways) | **GET** /v1/giveaways/pools/{poolId}/export | Export giveaway codes of a giveaway pool |
| [**exportReferrals**](ManagementApi.md#exportreferrals) | **GET** /v1/applications/{applicationId}/export_referrals | Export referrals |
| [**generateCouponRejections**](ManagementApi.md#generatecouponrejections) | **GET** /v1/coupon_rejections | Summarize coupon redemption failures in session |
| [**getAccessLogsWithoutTotalCount**](ManagementApi.md#getaccesslogswithouttotalcount) | **GET** /v1/applications/{applicationId}/access_logs/no_total | Get access logs for Application |
| [**getAccount**](ManagementApi.md#getaccount) | **GET** /v1/accounts/{accountId} | Get account details |
| [**getAccountAnalytics**](ManagementApi.md#getaccountanalytics) | **GET** /v1/accounts/{accountId}/analytics | Get account analytics |
| [**getAccountCollection**](ManagementApi.md#getaccountcollection) | **GET** /v1/collections/{collectionId} | Get account-level collection |
| [**getAchievement**](ManagementApi.md#getachievement) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/achievements/{achievementId} | Get achievement |
| [**getAdditionalCost**](ManagementApi.md#getadditionalcost) | **GET** /v1/additional_costs/{additionalCostId} | Get additional cost |
| [**getAdditionalCosts**](ManagementApi.md#getadditionalcosts) | **GET** /v1/additional_costs | List additional costs |
| [**getApplication**](ManagementApi.md#getapplication) | **GET** /v1/applications/{applicationId} | Get Application |
| [**getApplicationApiHealth**](ManagementApi.md#getapplicationapihealth) | **GET** /v1/applications/{applicationId}/health_report | Get Application health |
| [**getApplicationCustomer**](ManagementApi.md#getapplicationcustomer) | **GET** /v1/applications/{applicationId}/customers/{customerId} | Get application\&#39;s customer |
| [**getApplicationCustomerFriends**](ManagementApi.md#getapplicationcustomerfriends) | **GET** /v1/applications/{applicationId}/profile/{integrationId}/friends | List friends referred by customer profile |
| [**getApplicationCustomers**](ManagementApi.md#getapplicationcustomers) | **GET** /v1/applications/{applicationId}/customers | List application\&#39;s customers |
| [**getApplicationCustomersByAttributes**](ManagementApi.md#getapplicationcustomersbyattributes) | **POST** /v1/applications/{applicationId}/customer_search | List application customers matching the given attributes |
| [**getApplicationEventTypes**](ManagementApi.md#getapplicationeventtypes) | **GET** /v1/applications/{applicationId}/event_types | List Applications event types |
| [**getApplicationEventsWithoutTotalCount**](ManagementApi.md#getapplicationeventswithouttotalcount) | **GET** /v1/applications/{applicationId}/events/no_total | List Applications events |
| [**getApplicationSession**](ManagementApi.md#getapplicationsession) | **GET** /v1/applications/{applicationId}/sessions/{sessionId} | Get Application session |
| [**getApplicationSessions**](ManagementApi.md#getapplicationsessions) | **GET** /v1/applications/{applicationId}/sessions | List Application sessions |
| [**getApplications**](ManagementApi.md#getapplications) | **GET** /v1/applications | List Applications |
| [**getAttribute**](ManagementApi.md#getattribute) | **GET** /v1/attributes/{attributeId} | Get custom attribute |
| [**getAttributes**](ManagementApi.md#getattributes) | **GET** /v1/attributes | List custom attributes |
| [**getAudienceMemberships**](ManagementApi.md#getaudiencememberships) | **GET** /v1/audiences/{audienceId}/memberships | List audience members |
| [**getAudiences**](ManagementApi.md#getaudiences) | **GET** /v1/audiences | List audiences |
| [**getAudiencesAnalytics**](ManagementApi.md#getaudiencesanalytics) | **GET** /v1/audiences/analytics | List audience analytics |
| [**getCampaign**](ManagementApi.md#getcampaign) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId} | Get campaign |
| [**getCampaignAnalytics**](ManagementApi.md#getcampaignanalytics) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/analytics | Get analytics of campaigns |
| [**getCampaignByAttributes**](ManagementApi.md#getcampaignbyattributes) | **POST** /v1/applications/{applicationId}/campaigns_search | List campaigns that match the given attributes |
| [**getCampaignGroup**](ManagementApi.md#getcampaigngroup) | **GET** /v1/campaign_groups/{campaignGroupId} | Get campaign access group |
| [**getCampaignGroups**](ManagementApi.md#getcampaigngroups) | **GET** /v1/campaign_groups | List campaign access groups |
| [**getCampaignTemplates**](ManagementApi.md#getcampaigntemplates) | **GET** /v1/campaign_templates | List campaign templates |
| [**getCampaigns**](ManagementApi.md#getcampaigns) | **GET** /v1/applications/{applicationId}/campaigns | List campaigns |
| [**getChanges**](ManagementApi.md#getchanges) | **GET** /v1/changes | Get audit logs for an account |
| [**getCollection**](ManagementApi.md#getcollection) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/collections/{collectionId} | Get campaign-level collection |
| [**getCollectionItems**](ManagementApi.md#getcollectionitems) | **GET** /v1/collections/{collectionId}/items | Get collection items |
| [**getCouponsWithoutTotalCount**](ManagementApi.md#getcouponswithouttotalcount) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons/no_total | List coupons |
| [**getCustomerActivityReport**](ManagementApi.md#getcustomeractivityreport) | **GET** /v1/applications/{applicationId}/customer_activity_reports/{customerId} | Get customer\&#39;s activity report |
| [**getCustomerActivityReportsWithoutTotalCount**](ManagementApi.md#getcustomeractivityreportswithouttotalcount) | **GET** /v1/applications/{applicationId}/customer_activity_reports/no_total | Get Activity Reports for Application Customers |
| [**getCustomerAnalytics**](ManagementApi.md#getcustomeranalytics) | **GET** /v1/applications/{applicationId}/customers/{customerId}/analytics | Get customer\&#39;s analytics report |
| [**getCustomerProfile**](ManagementApi.md#getcustomerprofile) | **GET** /v1/customers/{customerId} | Get customer profile |
| [**getCustomerProfileAchievementProgress**](ManagementApi.md#getcustomerprofileachievementprogress) | **GET** /v1/applications/{applicationId}/achievement_progress/{integrationId} | List customer achievements |
| [**getCustomerProfiles**](ManagementApi.md#getcustomerprofiles) | **GET** /v1/customers/no_total | List customer profiles |
| [**getCustomersByAttributes**](ManagementApi.md#getcustomersbyattributes) | **POST** /v1/customer_search/no_total | List customer profiles matching the given attributes |
| [**getDashboardStatistics**](ManagementApi.md#getdashboardstatistics) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/dashboard | Get statistics for loyalty dashboard |
| [**getEventTypes**](ManagementApi.md#geteventtypes) | **GET** /v1/event_types | List event types |
| [**getExports**](ManagementApi.md#getexports) | **GET** /v1/exports | Get exports |
| [**getLoyaltyCard**](ManagementApi.md#getloyaltycard) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/cards/{loyaltyCardId} | Get loyalty card |
| [**getLoyaltyCardTransactionLogs**](ManagementApi.md#getloyaltycardtransactionlogs) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/cards/{loyaltyCardId}/logs | List card\&#39;s transactions |
| [**getLoyaltyCards**](ManagementApi.md#getloyaltycards) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/cards | List loyalty cards |
| [**getLoyaltyLedgerBalances**](ManagementApi.md#getloyaltyledgerbalances) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/profile/{integrationId}/ledger_balances | Get customer\&#39;s loyalty balances |
| [**getLoyaltyPoints**](ManagementApi.md#getloyaltypoints) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/profile/{integrationId} | Get customer\&#39;s full loyalty ledger |
| [**getLoyaltyProgram**](ManagementApi.md#getloyaltyprogram) | **GET** /v1/loyalty_programs/{loyaltyProgramId} | Get loyalty program |
| [**getLoyaltyProgramProfileLedgerTransactions**](ManagementApi.md#getloyaltyprogramprofileledgertransactions) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/profile/{integrationId}/ledger_transactions | List customer\&#39;s loyalty transactions |
| [**getLoyaltyProgramTransactions**](ManagementApi.md#getloyaltyprogramtransactions) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/transactions | List loyalty program transactions |
| [**getLoyaltyPrograms**](ManagementApi.md#getloyaltyprograms) | **GET** /v1/loyalty_programs | List loyalty programs |
| [**getLoyaltyStatistics**](ManagementApi.md#getloyaltystatistics) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/statistics | Get loyalty program statistics |
| [**getMessageLogs**](ManagementApi.md#getmessagelogs) | **GET** /v1/message_logs | List message log entries |
| [**getReferralsWithoutTotalCount**](ManagementApi.md#getreferralswithouttotalcount) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/referrals/no_total | List referrals |
| [**getRoleV2**](ManagementApi.md#getrolev2) | **GET** /v2/roles/{roleId} | Get role |
| [**getRuleset**](ManagementApi.md#getruleset) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/rulesets/{rulesetId} | Get ruleset |
| [**getRulesets**](ManagementApi.md#getrulesets) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/rulesets | List campaign rulesets |
| [**getStore**](ManagementApi.md#getstore) | **GET** /v1/applications/{applicationId}/stores/{storeId} | Get store |
| [**getUser**](ManagementApi.md#getuser) | **GET** /v1/users/{userId} | Get user |
| [**getUsers**](ManagementApi.md#getusers) | **GET** /v1/users | List users in account |
| [**getWebhook**](ManagementApi.md#getwebhook) | **GET** /v1/webhooks/{webhookId} | Get webhook |
| [**getWebhooks**](ManagementApi.md#getwebhooks) | **GET** /v1/webhooks | List webhooks |
| [**importAccountCollection**](ManagementApi.md#importaccountcollection) | **POST** /v1/collections/{collectionId}/import | Import data into existing account-level collection |
| [**importAllowedList**](ManagementApi.md#importallowedlist) | **POST** /v1/attributes/{attributeId}/allowed_list/import | Import allowed values for attribute |
| [**importAudiencesMemberships**](ManagementApi.md#importaudiencesmemberships) | **POST** /v1/audiences/{audienceId}/memberships/import | Import audience members |
| [**importCampaignStoreBudget**](ManagementApi.md#importcampaignstorebudget) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/stores/budgets/import | Import campaign store budgets |
| [**importCampaignStores**](ManagementApi.md#importcampaignstores) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/stores/import | Import stores |
| [**importCollection**](ManagementApi.md#importcollection) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/collections/{collectionId}/import | Import data into existing campaign-level collection |
| [**importCoupons**](ManagementApi.md#importcoupons) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/import_coupons | Import coupons |
| [**importLoyaltyCards**](ManagementApi.md#importloyaltycards) | **POST** /v1/loyalty_programs/{loyaltyProgramId}/import_cards | Import loyalty cards |
| [**importLoyaltyCustomersTiers**](ManagementApi.md#importloyaltycustomerstiers) | **POST** /v1/loyalty_programs/{loyaltyProgramId}/import_customers_tiers | Import customers into loyalty tiers |
| [**importLoyaltyPoints**](ManagementApi.md#importloyaltypoints) | **POST** /v1/loyalty_programs/{loyaltyProgramId}/import_points | Import loyalty points |
| [**importPoolGiveaways**](ManagementApi.md#importpoolgiveaways) | **POST** /v1/giveaways/pools/{poolId}/import | Import giveaway codes into a giveaway pool |
| [**importReferrals**](ManagementApi.md#importreferrals) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/import_referrals | Import referrals |
| [**inviteUserExternal**](ManagementApi.md#inviteuserexternal) | **POST** /v1/users/invite | Invite user from identity provider |
| [**listAccountCollections**](ManagementApi.md#listaccountcollections) | **GET** /v1/collections | List collections in account |
| [**listAchievements**](ManagementApi.md#listachievements) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/achievements | List achievements |
| [**listAllRolesV2**](ManagementApi.md#listallrolesv2) | **GET** /v2/roles | List roles |
| [**listCampaignStoreBudgetLimits**](ManagementApi.md#listcampaignstorebudgetlimits) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/stores/budgets | List campaign store budget limits |
| [**listCatalogItems**](ManagementApi.md#listcatalogitems) | **GET** /v1/catalogs/{catalogId}/items | List items in a catalog |
| [**listCollections**](ManagementApi.md#listcollections) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/collections | List collections in campaign |
| [**listCollectionsInApplication**](ManagementApi.md#listcollectionsinapplication) | **GET** /v1/applications/{applicationId}/collections | List collections in Application |
| [**listStores**](ManagementApi.md#liststores) | **GET** /v1/applications/{applicationId}/stores | List stores |
| [**oktaEventHandlerChallenge**](ManagementApi.md#oktaeventhandlerchallenge) | **GET** /v1/provisioning/okta | Validate Okta API ownership |
| [**removeLoyaltyPoints**](ManagementApi.md#removeloyaltypoints) | **PUT** /v1/loyalty_programs/{loyaltyProgramId}/profile/{integrationId}/deduct_points | Deduct points from customer profile |
| [**resetPassword**](ManagementApi.md#resetpassword) | **POST** /v1/reset_password | Reset password |
| [**scimCreateGroup**](ManagementApi.md#scimcreategroup) | **POST** /v1/provisioning/scim/Groups | Create SCIM group |
| [**scimCreateUser**](ManagementApi.md#scimcreateuser) | **POST** /v1/provisioning/scim/Users | Create SCIM user |
| [**scimDeleteGroup**](ManagementApi.md#scimdeletegroup) | **DELETE** /v1/provisioning/scim/Groups/{groupId} | Delete SCIM group |
| [**scimDeleteUser**](ManagementApi.md#scimdeleteuser) | **DELETE** /v1/provisioning/scim/Users/{userId} | Delete SCIM user |
| [**scimGetGroup**](ManagementApi.md#scimgetgroup) | **GET** /v1/provisioning/scim/Groups/{groupId} | Get SCIM group |
| [**scimGetGroups**](ManagementApi.md#scimgetgroups) | **GET** /v1/provisioning/scim/Groups | List SCIM groups |
| [**scimGetResourceTypes**](ManagementApi.md#scimgetresourcetypes) | **GET** /v1/provisioning/scim/ResourceTypes | List supported SCIM resource types |
| [**scimGetSchemas**](ManagementApi.md#scimgetschemas) | **GET** /v1/provisioning/scim/Schemas | List supported SCIM schemas |
| [**scimGetServiceProviderConfig**](ManagementApi.md#scimgetserviceproviderconfig) | **GET** /v1/provisioning/scim/ServiceProviderConfig | Get SCIM service provider configuration |
| [**scimGetUser**](ManagementApi.md#scimgetuser) | **GET** /v1/provisioning/scim/Users/{userId} | Get SCIM user |
| [**scimGetUsers**](ManagementApi.md#scimgetusers) | **GET** /v1/provisioning/scim/Users | List SCIM users |
| [**scimPatchGroup**](ManagementApi.md#scimpatchgroup) | **PATCH** /v1/provisioning/scim/Groups/{groupId} | Update SCIM group attributes |
| [**scimPatchUser**](ManagementApi.md#scimpatchuser) | **PATCH** /v1/provisioning/scim/Users/{userId} | Update SCIM user attributes |
| [**scimReplaceGroupAttributes**](ManagementApi.md#scimreplacegroupattributes) | **PUT** /v1/provisioning/scim/Groups/{groupId} | Update SCIM group |
| [**scimReplaceUserAttributes**](ManagementApi.md#scimreplaceuserattributes) | **PUT** /v1/provisioning/scim/Users/{userId} | Update SCIM user |
| [**searchCouponsAdvancedApplicationWideWithoutTotalCount**](ManagementApi.md#searchcouponsadvancedapplicationwidewithouttotalcount) | **POST** /v1/applications/{applicationId}/coupons_search_advanced/no_total | List coupons that match the given attributes (without total count) |
| [**searchCouponsAdvancedWithoutTotalCount**](ManagementApi.md#searchcouponsadvancedwithouttotalcount) | **POST** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons_search_advanced/no_total | List coupons that match the given attributes in campaign (without total count) |
| [**summarizeCampaignStoreBudget**](ManagementApi.md#summarizecampaignstorebudget) | **GET** /v1/applications/{applicationId}/campaigns/{campaignId}/stores/budgets/summary | Get summary of campaign store budgets |
| [**transferLoyaltyCard**](ManagementApi.md#transferloyaltycard) | **PUT** /v1/loyalty_programs/{loyaltyProgramId}/cards/{loyaltyCardId}/transfer | Transfer card data |
| [**updateAccountCollection**](ManagementApi.md#updateaccountcollection) | **PUT** /v1/collections/{collectionId} | Update account-level collection |
| [**updateAchievement**](ManagementApi.md#updateachievement) | **PUT** /v1/applications/{applicationId}/campaigns/{campaignId}/achievements/{achievementId} | Update achievement |
| [**updateAdditionalCost**](ManagementApi.md#updateadditionalcost) | **PUT** /v1/additional_costs/{additionalCostId} | Update additional cost |
| [**updateAttribute**](ManagementApi.md#updateattribute) | **PUT** /v1/attributes/{attributeId} | Update custom attribute |
| [**updateCampaign**](ManagementApi.md#updatecampaign) | **PUT** /v1/applications/{applicationId}/campaigns/{campaignId} | Update campaign |
| [**updateCollection**](ManagementApi.md#updatecollection) | **PUT** /v1/applications/{applicationId}/campaigns/{campaignId}/collections/{collectionId} | Update campaign-level collection\&#39;s description |
| [**updateCoupon**](ManagementApi.md#updatecoupon) | **PUT** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons/{couponId} | Update coupon |
| [**updateCouponBatch**](ManagementApi.md#updatecouponbatch) | **PUT** /v1/applications/{applicationId}/campaigns/{campaignId}/coupons | Update coupons |
| [**updateLoyaltyCard**](ManagementApi.md#updateloyaltycard) | **PUT** /v1/loyalty_programs/{loyaltyProgramId}/cards/{loyaltyCardId} | Update loyalty card status |
| [**updateReferral**](ManagementApi.md#updatereferral) | **PUT** /v1/applications/{applicationId}/campaigns/{campaignId}/referrals/{referralId} | Update referral |
| [**updateRoleV2**](ManagementApi.md#updaterolev2) | **PUT** /v2/roles/{roleId} | Update role |
| [**updateStore**](ManagementApi.md#updatestore) | **PUT** /v1/applications/{applicationId}/stores/{storeId} | Update store |
| [**updateUser**](ManagementApi.md#updateuser) | **PUT** /v1/users/{userId} | Update user |



## activateUserByEmail

> activateUserByEmail(activateUserRequest)

Enable user by email address

Enable a [disabled user](https://docs.talon.one/docs/product/account/account-settings/managing-users#disabling-a-user) by their email address. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ActivateUserByEmailRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // ActivateUserRequest | body
    activateUserRequest: ...,
  } satisfies ActivateUserByEmailRequest;

  try {
    const data = await api.activateUserByEmail(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **activateUserRequest** | [ActivateUserRequest](ActivateUserRequest.md) | body | |

### Return type

`void` (Empty response body)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addLoyaltyCardPoints

> addLoyaltyCardPoints(loyaltyProgramId, loyaltyCardId, addLoyaltyPoints)

Add points to card

Add points to the given loyalty card in the specified card-based loyalty program. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { AddLoyaltyCardPointsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
    loyaltyProgramId: 789,
    // string | Identifier of the loyalty card. You can get the identifier with the [List loyalty cards](https://docs.talon.one/management-api#tag/Loyalty-cards/operation/getLoyaltyCards) endpoint. 
    loyaltyCardId: loyaltyCardId_example,
    // AddLoyaltyPoints | body
    addLoyaltyPoints: ...,
  } satisfies AddLoyaltyCardPointsRequest;

  try {
    const data = await api.addLoyaltyCardPoints(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `number` | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | [Defaults to `undefined`] |
| **loyaltyCardId** | `string` | Identifier of the loyalty card. You can get the identifier with the [List loyalty cards](https://docs.talon.one/management-api#tag/Loyalty-cards/operation/getLoyaltyCards) endpoint.  | [Defaults to `undefined`] |
| **addLoyaltyPoints** | [AddLoyaltyPoints](AddLoyaltyPoints.md) | body | |

### Return type

`void` (Empty response body)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## addLoyaltyPoints

> addLoyaltyPoints(loyaltyProgramId, integrationId, addLoyaltyPoints)

Add points to customer profile

Add points in the specified loyalty program for the given customer.  To get the &#x60;integrationId&#x60; of the profile from a &#x60;sessionId&#x60;, use the [Update customer session](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { AddLoyaltyPointsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // string | The identifier for the loyalty program.
    loyaltyProgramId: loyaltyProgramId_example,
    // string | The integration identifier for this customer profile. Must be: - Unique within the deployment. - Stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  Once set, you cannot update this identifier. 
    integrationId: integrationId_example,
    // AddLoyaltyPoints | body
    addLoyaltyPoints: ...,
  } satisfies AddLoyaltyPointsRequest;

  try {
    const data = await api.addLoyaltyPoints(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `string` | The identifier for the loyalty program. | [Defaults to `undefined`] |
| **integrationId** | `string` | The integration identifier for this customer profile. Must be: - Unique within the deployment. - Stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  Once set, you cannot update this identifier.  | [Defaults to `undefined`] |
| **addLoyaltyPoints** | [AddLoyaltyPoints](AddLoyaltyPoints.md) | body | |

### Return type

`void` (Empty response body)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## copyCampaignToApplications

> GetCampaigns200Response copyCampaignToApplications(applicationId, campaignId, campaignCopy)

Copy the campaign into the specified Application

Copy the campaign into all specified Applications.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { CopyCampaignToApplicationsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // CampaignCopy | body
    campaignCopy: ...,
  } satisfies CopyCampaignToApplicationsRequest;

  try {
    const data = await api.copyCampaignToApplications(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignCopy** | [CampaignCopy](CampaignCopy.md) | body | |

### Return type

[**GetCampaigns200Response**](GetCampaigns200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createAccountCollection

> Collection createAccountCollection(newCollection)

Create account-level collection

Create an account-level collection.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { CreateAccountCollectionRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // NewCollection | body
    newCollection: ...,
  } satisfies CreateAccountCollectionRequest;

  try {
    const data = await api.createAccountCollection(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **newCollection** | [NewCollection](NewCollection.md) | body | |

### Return type

[**Collection**](Collection.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **409** | Conflict. A collection with this name already exists. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createAchievement

> Achievement createAchievement(applicationId, campaignId, createAchievement)

Create achievement

Create a new achievement in a specific campaign.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { CreateAchievementRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // CreateAchievement | body
    createAchievement: ...,
  } satisfies CreateAchievementRequest;

  try {
    const data = await api.createAchievement(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **createAchievement** | [CreateAchievement](CreateAchievement.md) | body | |

### Return type

[**Achievement**](Achievement.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **409** | Conflict. An achievement with this name or title already exists. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createAdditionalCost

> AccountAdditionalCost createAdditionalCost(newAdditionalCost)

Create additional cost

Create an [additional cost](https://docs.talon.one/docs/product/account/dev-tools/managing-additional-costs).  These additional costs are shared across all applications in your account, and are never required. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { CreateAdditionalCostRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // NewAdditionalCost | body
    newAdditionalCost: ...,
  } satisfies CreateAdditionalCostRequest;

  try {
    const data = await api.createAdditionalCost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **newAdditionalCost** | [NewAdditionalCost](NewAdditionalCost.md) | body | |

### Return type

[**AccountAdditionalCost**](AccountAdditionalCost.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createAttribute

> Attribute createAttribute(newAttribute)

Create custom attribute

Create a _custom attribute_ in this account. [Custom attributes](https://docs.talon.one/docs/dev/concepts/attributes) allow you to add data to Talon.One domain entities like campaigns, coupons, customers and so on.  These attributes can then be given values when creating/updating these entities, and these values can be used in your campaign rules.  For example, you could define a &#x60;zipCode&#x60; field for customer sessions, and add a rule to your campaign that only allows certain ZIP codes.  These attributes are shared across all Applications in your account and are never required. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { CreateAttributeRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // NewAttribute | body
    newAttribute: ...,
  } satisfies CreateAttributeRequest;

  try {
    const data = await api.createAttribute(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **newAttribute** | [NewAttribute](NewAttribute.md) | body | |

### Return type

[**Attribute**](Attribute.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createBatchLoyaltyCards

> LoyaltyCardBatchResponse createBatchLoyaltyCards(loyaltyProgramId, loyaltyCardBatch)

Create loyalty cards

Create a batch of loyalty cards in a specified [card-based loyalty program](https://docs.talon.one/docs/product/loyalty-programs/overview#loyalty-program-types).  Customers can use loyalty cards to collect and spend loyalty points.  **Important:**  - The specified card-based loyalty program must have a defined card code format that is used to generate the loyalty card codes. - Trying to create more than 20,000 loyalty cards in a single request returns an error message with a &#x60;400&#x60; status code. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { CreateBatchLoyaltyCardsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
    loyaltyProgramId: 789,
    // LoyaltyCardBatch | body
    loyaltyCardBatch: ...,
  } satisfies CreateBatchLoyaltyCardsRequest;

  try {
    const data = await api.createBatchLoyaltyCards(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `number` | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | [Defaults to `undefined`] |
| **loyaltyCardBatch** | [LoyaltyCardBatch](LoyaltyCardBatch.md) | body | |

### Return type

[**LoyaltyCardBatchResponse**](LoyaltyCardBatchResponse.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createCampaignFromTemplate

> CreateTemplateCampaignResponse createCampaignFromTemplate(applicationId, createTemplateCampaign)

Create campaign from campaign template

Use the campaign template referenced in the request body to create a new campaign in one of the connected Applications.  If the template was created from a campaign with rules referencing [campaign collections](https://docs.talon.one/docs/product/campaigns/managing-collections), the corresponding collections for the new campaign are created automatically. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { CreateCampaignFromTemplateRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // CreateTemplateCampaign | body
    createTemplateCampaign: ...,
  } satisfies CreateCampaignFromTemplateRequest;

  try {
    const data = await api.createCampaignFromTemplate(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **createTemplateCampaign** | [CreateTemplateCampaign](CreateTemplateCampaign.md) | body | |

### Return type

[**CreateTemplateCampaignResponse**](CreateTemplateCampaignResponse.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createCampaignStoreBudget

> createCampaignStoreBudget(applicationId, campaignId, newCampaignStoreBudget)

Create campaign store budget

Create a new store budget for a given campaign.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { CreateCampaignStoreBudgetRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // NewCampaignStoreBudget | body
    newCampaignStoreBudget: ...,
  } satisfies CreateCampaignStoreBudgetRequest;

  try {
    const data = await api.createCampaignStoreBudget(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **newCampaignStoreBudget** | [NewCampaignStoreBudget](NewCampaignStoreBudget.md) | body | |

### Return type

`void` (Empty response body)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad request |  -  |
| **409** | Conflict |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createCollection

> Collection createCollection(applicationId, campaignId, newCampaignCollection)

Create campaign-level collection

Create a campaign-level collection in a given campaign.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { CreateCollectionRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // NewCampaignCollection | body
    newCampaignCollection: ...,
  } satisfies CreateCollectionRequest;

  try {
    const data = await api.createCollection(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **newCampaignCollection** | [NewCampaignCollection](NewCampaignCollection.md) | body | |

### Return type

[**Collection**](Collection.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createCoupons

> CreateCoupons200Response createCoupons(applicationId, campaignId, newCoupons, silent)

Create coupons

Create coupons according to some pattern. Up to 20.000 coupons can be created without a unique prefix. When a unique prefix is provided, up to 200.000 coupons can be created.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { CreateCouponsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // NewCoupons | body
    newCoupons: ...,
    // string | Possible values: `yes` or `no`. - `yes`: Increases the performance of the API call by returning a 204 response. - `no`: Returns a 200 response that contains the updated customer profiles.  (optional)
    silent: silent_example,
  } satisfies CreateCouponsRequest;

  try {
    const data = await api.createCoupons(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **newCoupons** | [NewCoupons](NewCoupons.md) | body | |
| **silent** | `string` | Possible values: &#x60;yes&#x60; or &#x60;no&#x60;. - &#x60;yes&#x60;: Increases the performance of the API call by returning a 204 response. - &#x60;no&#x60;: Returns a 200 response that contains the updated customer profiles.  | [Optional] [Defaults to `&#39;yes&#39;`] |

### Return type

[**CreateCoupons200Response**](CreateCoupons200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createCouponsAsync

> AsyncCouponCreationResponse createCouponsAsync(applicationId, campaignId, newCouponCreationJob)

Create coupons asynchronously

Create up to 5,000,000 coupons asynchronously. You should typically use this enpdoint when you create at least 20,001 coupons. You receive an email when the creation is complete.  If you want to create less than 20,001 coupons, you can use the [Create coupons](https://docs.talon.one/management-api#tag/Coupons/operation/createCoupons) endpoint. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { CreateCouponsAsyncRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // NewCouponCreationJob | body
    newCouponCreationJob: ...,
  } satisfies CreateCouponsAsyncRequest;

  try {
    const data = await api.createCouponsAsync(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **newCouponCreationJob** | [NewCouponCreationJob](NewCouponCreationJob.md) | body | |

### Return type

[**AsyncCouponCreationResponse**](AsyncCouponCreationResponse.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createCouponsDeletionJob

> AsyncCouponDeletionJobResponse createCouponsDeletionJob(applicationId, campaignId, newCouponDeletionJob)

Creates a coupon deletion job

This endpoint handles creating a job to delete coupons asynchronously. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { CreateCouponsDeletionJobRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // NewCouponDeletionJob | body
    newCouponDeletionJob: ...,
  } satisfies CreateCouponsDeletionJobRequest;

  try {
    const data = await api.createCouponsDeletionJob(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **newCouponDeletionJob** | [NewCouponDeletionJob](NewCouponDeletionJob.md) | body | |

### Return type

[**AsyncCouponDeletionJobResponse**](AsyncCouponDeletionJobResponse.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | The deletion request has been accepted and will be processed asynchronously |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createCouponsForMultipleRecipients

> CreateCoupons200Response createCouponsForMultipleRecipients(applicationId, campaignId, newCouponsForMultipleRecipients, silent)

Create coupons for multiple recipients

Create coupons according to some pattern for up to 1000 recipients.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { CreateCouponsForMultipleRecipientsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // NewCouponsForMultipleRecipients | body
    newCouponsForMultipleRecipients: ...,
    // string | Possible values: `yes` or `no`. - `yes`: Increases the performance of the API call by returning a 204 response. - `no`: Returns a 200 response that contains the updated customer profiles.  (optional)
    silent: silent_example,
  } satisfies CreateCouponsForMultipleRecipientsRequest;

  try {
    const data = await api.createCouponsForMultipleRecipients(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **newCouponsForMultipleRecipients** | [NewCouponsForMultipleRecipients](NewCouponsForMultipleRecipients.md) | body | |
| **silent** | `string` | Possible values: &#x60;yes&#x60; or &#x60;no&#x60;. - &#x60;yes&#x60;: Increases the performance of the API call by returning a 204 response. - &#x60;no&#x60;: Returns a 200 response that contains the updated customer profiles.  | [Optional] [Defaults to `&#39;yes&#39;`] |

### Return type

[**CreateCoupons200Response**](CreateCoupons200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createInviteEmail

> NewInviteEmail createInviteEmail(newInviteEmail)

Resend invitation email

Resend an email invitation to an existing user.  **Note:** The invitation token is valid for 24 hours after the email has been sent. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { CreateInviteEmailRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // NewInviteEmail | body
    newInviteEmail: ...,
  } satisfies CreateInviteEmailRequest;

  try {
    const data = await api.createInviteEmail(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **newInviteEmail** | [NewInviteEmail](NewInviteEmail.md) | body | |

### Return type

[**NewInviteEmail**](NewInviteEmail.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createInviteV2

> User createInviteV2(newInvitation)

Invite user

Create a new user in the account and send an invitation to their email address.  **Note**: The invitation token is valid for 24 hours after the email has been sent. You can resend an invitation to a user with the [Resend invitation email](https://docs.talon.one/management-api#tag/Accounts-and-users/operation/createInviteEmail) endpoint. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { CreateInviteV2Request } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // NewInvitation | body
    newInvitation: ...,
  } satisfies CreateInviteV2Request;

  try {
    const data = await api.createInviteV2(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **newInvitation** | [NewInvitation](NewInvitation.md) | body | |

### Return type

[**User**](User.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createPasswordRecoveryEmail

> NewPasswordEmail createPasswordRecoveryEmail(newPasswordEmail)

Request a password reset

Send an email with a password recovery link to the email address of an existing account.  **Note:** The password recovery link expires 30 minutes after this endpoint is triggered. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { CreatePasswordRecoveryEmailRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // NewPasswordEmail | body
    newPasswordEmail: ...,
  } satisfies CreatePasswordRecoveryEmailRequest;

  try {
    const data = await api.createPasswordRecoveryEmail(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **newPasswordEmail** | [NewPasswordEmail](NewPasswordEmail.md) | body | |

### Return type

[**NewPasswordEmail**](NewPasswordEmail.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createSession

> Session createSession(loginParams)

Create session

Create a session to use the Management API endpoints. Use the value of the &#x60;token&#x60; property provided in the response as bearer token in other API calls.  A token is valid for 3 months. In accordance with best pratices, use your generated token for all your API requests. Do **not** regenerate a token for each request.  This endpoint has a rate limit of 3 to 6 requests per second per account, depending on your setup.  &lt;div class&#x3D;\&quot;redoc-section\&quot;&gt;   &lt;p class&#x3D;\&quot;title\&quot;&gt;Granular API key&lt;/p&gt;   Instead of using a session, you can also use the &lt;a href&#x3D;\&quot;https://docs.talon.one/docs/product/account/dev-tools/managing-mapi-keys\&quot;&gt;Management API key feature&lt;/a&gt;   in the Campaign Manager to decide which endpoints can be used with a given key. &lt;/div&gt; 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { CreateSessionRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // LoginParams | body
    loginParams: ...,
  } satisfies CreateSessionRequest;

  try {
    const data = await api.createSession(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loginParams** | [LoginParams](LoginParams.md) | body | |

### Return type

[**Session**](Session.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createStore

> Store createStore(applicationId, newStore)

Create store

Create a new store in a specific Application.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { CreateStoreRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // NewStore | body
    newStore: ...,
  } satisfies CreateStoreRequest;

  try {
    const data = await api.createStore(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **newStore** | [NewStore](NewStore.md) | body | |

### Return type

[**Store**](Store.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad request |  -  |
| **409** | Conflict. A store with this integration ID already exists for this application. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deactivateUserByEmail

> deactivateUserByEmail(deactivateUserRequest)

Disable user by email address

[Disable a specific user](https://docs.talon.one/docs/product/account/account-settings/managing-users#disabling-a-user) by their email address. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { DeactivateUserByEmailRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // DeactivateUserRequest | body
    deactivateUserRequest: ...,
  } satisfies DeactivateUserByEmailRequest;

  try {
    const data = await api.deactivateUserByEmail(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **deactivateUserRequest** | [DeactivateUserRequest](DeactivateUserRequest.md) | body | |

### Return type

`void` (Empty response body)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deductLoyaltyCardPoints

> deductLoyaltyCardPoints(loyaltyProgramId, loyaltyCardId, deductLoyaltyPoints)

Deduct points from card

Deduct points from the given loyalty card in the specified card-based loyalty program. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { DeductLoyaltyCardPointsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
    loyaltyProgramId: 789,
    // string | Identifier of the loyalty card. You can get the identifier with the [List loyalty cards](https://docs.talon.one/management-api#tag/Loyalty-cards/operation/getLoyaltyCards) endpoint. 
    loyaltyCardId: loyaltyCardId_example,
    // DeductLoyaltyPoints | body
    deductLoyaltyPoints: ...,
  } satisfies DeductLoyaltyCardPointsRequest;

  try {
    const data = await api.deductLoyaltyCardPoints(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `number` | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | [Defaults to `undefined`] |
| **loyaltyCardId** | `string` | Identifier of the loyalty card. You can get the identifier with the [List loyalty cards](https://docs.talon.one/management-api#tag/Loyalty-cards/operation/getLoyaltyCards) endpoint.  | [Defaults to `undefined`] |
| **deductLoyaltyPoints** | [DeductLoyaltyPoints](DeductLoyaltyPoints.md) | body | |

### Return type

`void` (Empty response body)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteAccountCollection

> deleteAccountCollection(collectionId)

Delete account-level collection

Delete a given account-level collection.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { DeleteAccountCollectionRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the collection. You can get it with the [List collections in account](#operation/listAccountCollections) endpoint.
    collectionId: 789,
  } satisfies DeleteAccountCollectionRequest;

  try {
    const data = await api.deleteAccountCollection(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **collectionId** | `number` | The ID of the collection. You can get it with the [List collections in account](#operation/listAccountCollections) endpoint. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteAchievement

> deleteAchievement(applicationId, campaignId, achievementId)

Delete achievement

Delete the specified achievement.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { DeleteAchievementRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // number | The ID of the achievement. You can get this ID with the [List achievement](https://docs.talon.one/management-api#tag/Achievements/operation/listAchievements) endpoint.
    achievementId: 789,
  } satisfies DeleteAchievementRequest;

  try {
    const data = await api.deleteAchievement(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **achievementId** | `number` | The ID of the achievement. You can get this ID with the [List achievement](https://docs.talon.one/management-api#tag/Achievements/operation/listAchievements) endpoint. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteCampaign

> deleteCampaign(applicationId, campaignId)

Delete campaign

Delete the given campaign.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { DeleteCampaignRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
  } satisfies DeleteCampaignRequest;

  try {
    const data = await api.deleteCampaign(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteCampaignStoreBudgets

> deleteCampaignStoreBudgets(applicationId, campaignId, action, period)

Delete campaign store budgets

Delete the store budgets for a given campaign.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { DeleteCampaignStoreBudgetsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // 'setDiscount' | The action that this budget is limiting. (optional)
    action: action_example,
    // 'overall' | 'daily' | 'weekly' | 'monthly' | 'yearly' | The period to which the limit applies.  **Note**: For budgets with no period, set this to `overall`.  (optional)
    period: period_example,
  } satisfies DeleteCampaignStoreBudgetsRequest;

  try {
    const data = await api.deleteCampaignStoreBudgets(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **action** | `setDiscount` | The action that this budget is limiting. | [Optional] [Defaults to `undefined`] [Enum: setDiscount] |
| **period** | `overall`, `daily`, `weekly`, `monthly`, `yearly` | The period to which the limit applies.  **Note**: For budgets with no period, set this to &#x60;overall&#x60;.  | [Optional] [Defaults to `undefined`] [Enum: overall, daily, weekly, monthly, yearly] |

### Return type

`void` (Empty response body)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Deleted |  -  |
| **400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteCollection

> deleteCollection(applicationId, campaignId, collectionId)

Delete campaign-level collection

Delete a given campaign-level collection.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { DeleteCollectionRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // number | The ID of the collection. You can get it with the [List collections in Application](#operation/listCollectionsInApplication) endpoint.
    collectionId: 789,
  } satisfies DeleteCollectionRequest;

  try {
    const data = await api.deleteCollection(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **collectionId** | `number` | The ID of the collection. You can get it with the [List collections in Application](#operation/listCollectionsInApplication) endpoint. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteCoupon

> deleteCoupon(applicationId, campaignId, couponId)

Delete coupon

Delete the specified coupon.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { DeleteCouponRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // string | The internal ID of the coupon code. You can find this value in the `id` property from the [List coupons](https://docs.talon.one/management-api#tag/Coupons/operation/getCouponsWithoutTotalCount) endpoint response. 
    couponId: couponId_example,
  } satisfies DeleteCouponRequest;

  try {
    const data = await api.deleteCoupon(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **couponId** | `string` | The internal ID of the coupon code. You can find this value in the &#x60;id&#x60; property from the [List coupons](https://docs.talon.one/management-api#tag/Coupons/operation/getCouponsWithoutTotalCount) endpoint response.  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteCoupons

> deleteCoupons(applicationId, campaignId, value, createdBefore, createdAfter, startsAfter, startsBefore, expiresAfter, expiresBefore, valid, batchId, usable, referralId, recipientIntegrationId, exactMatch)

Delete coupons

Deletes all the coupons matching the specified criteria.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { DeleteCouponsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // string | Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters. (optional)
    value: value_example,
    // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    createdBefore: 2013-10-20T19:20:30+01:00,
    // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    createdAfter: 2013-10-20T19:20:30+01:00,
    // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon start date timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    startsAfter: 2013-10-20T19:20:30+01:00,
    // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon start date timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    startsBefore: 2013-10-20T19:20:30+01:00,
    // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon expiration date timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    expiresAfter: 2013-10-20T19:20:30+01:00,
    // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon expiration date timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    expiresBefore: 2013-10-20T19:20:30+01:00,
    // 'expired' | 'validNow' | 'validFuture' | - `expired`: Matches coupons in which the expiration date is set and in the past. - `validNow`: Matches coupons in which start date is null or in the past and expiration date is null or in the future. - `validFuture`: Matches coupons in which start date is set and in the future.  (optional)
    valid: valid_example,
    // string | Filter results by batches of coupons (optional)
    batchId: batchId_example,
    // 'true' | 'false' | - `true`: only coupons where `usageCounter < usageLimit` will be returned. - `false`: only coupons where `usageCounter >= usageLimit` will be returned.  (optional)
    usable: usable_example,
    // number | Filter the results by matching them with the ID of a referral. This filter shows the coupons created by redeeming a referral code. (optional)
    referralId: 789,
    // string | Filter results by match with a profile ID specified in the coupon\'s `RecipientIntegrationId` field.  (optional)
    recipientIntegrationId: recipientIntegrationId_example,
    // boolean | Filter results to an exact case-insensitive matching against the coupon code (optional)
    exactMatch: true,
  } satisfies DeleteCouponsRequest;

  try {
    const data = await api.deleteCoupons(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **value** | `string` | Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters. | [Optional] [Defaults to `undefined`] |
| **createdBefore** | `Date` | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **createdAfter** | `Date` | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **startsAfter** | `Date` | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon start date timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **startsBefore** | `Date` | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon start date timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **expiresAfter** | `Date` | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon expiration date timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **expiresBefore** | `Date` | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon expiration date timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **valid** | `expired`, `validNow`, `validFuture` | - &#x60;expired&#x60;: Matches coupons in which the expiration date is set and in the past. - &#x60;validNow&#x60;: Matches coupons in which start date is null or in the past and expiration date is null or in the future. - &#x60;validFuture&#x60;: Matches coupons in which start date is set and in the future.  | [Optional] [Defaults to `undefined`] [Enum: expired, validNow, validFuture] |
| **batchId** | `string` | Filter results by batches of coupons | [Optional] [Defaults to `undefined`] |
| **usable** | `true`, `false` | - &#x60;true&#x60;: only coupons where &#x60;usageCounter &lt; usageLimit&#x60; will be returned. - &#x60;false&#x60;: only coupons where &#x60;usageCounter &gt;&#x3D; usageLimit&#x60; will be returned.  | [Optional] [Defaults to `undefined`] [Enum: true, false] |
| **referralId** | `number` | Filter the results by matching them with the ID of a referral. This filter shows the coupons created by redeeming a referral code. | [Optional] [Defaults to `undefined`] |
| **recipientIntegrationId** | `string` | Filter results by match with a profile ID specified in the coupon\&#39;s &#x60;RecipientIntegrationId&#x60; field.  | [Optional] [Defaults to `undefined`] |
| **exactMatch** | `boolean` | Filter results to an exact case-insensitive matching against the coupon code | [Optional] [Defaults to `false`] |

### Return type

`void` (Empty response body)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteLoyaltyCard

> deleteLoyaltyCard(loyaltyProgramId, loyaltyCardId)

Delete loyalty card

Delete the given loyalty card.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { DeleteLoyaltyCardRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
    loyaltyProgramId: 789,
    // string | Identifier of the loyalty card. You can get the identifier with the [List loyalty cards](https://docs.talon.one/management-api#tag/Loyalty-cards/operation/getLoyaltyCards) endpoint. 
    loyaltyCardId: loyaltyCardId_example,
  } satisfies DeleteLoyaltyCardRequest;

  try {
    const data = await api.deleteLoyaltyCard(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `number` | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | [Defaults to `undefined`] |
| **loyaltyCardId** | `string` | Identifier of the loyalty card. You can get the identifier with the [List loyalty cards](https://docs.talon.one/management-api#tag/Loyalty-cards/operation/getLoyaltyCards) endpoint.  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteReferral

> deleteReferral(applicationId, campaignId, referralId)

Delete referral

Delete the specified referral.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { DeleteReferralRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // string | The ID of the referral code.
    referralId: referralId_example,
  } satisfies DeleteReferralRequest;

  try {
    const data = await api.deleteReferral(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **referralId** | `string` | The ID of the referral code. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteStore

> deleteStore(applicationId, storeId)

Delete store

Delete the specified store.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { DeleteStoreRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // string | The ID of the store. You can get this ID with the [List stores](#tag/Stores/operation/listStores) endpoint. 
    storeId: storeId_example,
  } satisfies DeleteStoreRequest;

  try {
    const data = await api.deleteStore(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **storeId** | `string` | The ID of the store. You can get this ID with the [List stores](#tag/Stores/operation/listStores) endpoint.  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteUser

> deleteUser(userId)

Delete user

Delete a specific user.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { DeleteUserRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the user.
    userId: 789,
  } satisfies DeleteUserRequest;

  try {
    const data = await api.deleteUser(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userId** | `number` | The ID of the user. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteUserByEmail

> deleteUserByEmail(deleteUserRequest)

Delete user by email address

[Delete a specific user](https://docs.talon.one/docs/product/account/account-settings/managing-users#deleting-a-user) by their email address. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { DeleteUserByEmailRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // DeleteUserRequest | body
    deleteUserRequest: ...,
  } satisfies DeleteUserByEmailRequest;

  try {
    const data = await api.deleteUserByEmail(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **deleteUserRequest** | [DeleteUserRequest](DeleteUserRequest.md) | body | |

### Return type

`void` (Empty response body)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## destroySession

> destroySession()

Destroy session

Destroys the session.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { DestroySessionRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  try {
    const data = await api.destroySession();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

`void` (Empty response body)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## disconnectCampaignStores

> disconnectCampaignStores(applicationId, campaignId)

Disconnect stores

Disconnect the stores linked to a specific campaign.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { DisconnectCampaignStoresRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
  } satisfies DisconnectCampaignStoresRequest;

  try {
    const data = await api.disconnectCampaignStores(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid API key |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportAccountCollectionItems

> string exportAccountCollectionItems(collectionId)

Export account-level collection\&#39;s items

Download a CSV file containing items from a given account-level collection.  **Tip:** If the exported CSV file is too large to view, you can [split it into multiple files](https://www.makeuseof.com/tag/how-to-split-a-huge-csv-excel-workbook-into-seperate-files/). 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ExportAccountCollectionItemsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the collection. You can get it with the [List collections in account](#operation/listAccountCollections) endpoint.
    collectionId: 789,
  } satisfies ExportAccountCollectionItemsRequest;

  try {
    const data = await api.exportAccountCollectionItems(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **collectionId** | `number` | The ID of the collection. You can get it with the [List collections in account](#operation/listAccountCollections) endpoint. | [Defaults to `undefined`] |

### Return type

**string**

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/csv`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized - Invalid API key |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportAchievements

> string exportAchievements(applicationId, campaignId, achievementId)

Export achievement customer data

Download a CSV file containing a list of all the customers who have participated in and are currently participating in the given achievement.  The CSV file contains the following columns: - &#x60;profileIntegrationID&#x60;: The integration ID of the customer profile participating in the achievement. - &#x60;title&#x60;: The display name of the achievement in the Campaign Manager. - &#x60;target&#x60;: The required number of actions or the transactional milestone to complete the achievement. - &#x60;progress&#x60;: The current progress of the customer in the achievement. - &#x60;status&#x60;: The status of the achievement. Can be one of: [\&#39;inprogress\&#39;, \&#39;completed\&#39;, \&#39;expired\&#39;]. - &#x60;startDate&#x60;: The date on which the customer profile started the achievement in RFC3339. - &#x60;endDate&#x60;: The date on which the achievement ends and resets for the customer profile in RFC3339. - &#x60;completionDate&#x60;: The date on which the customer profile completed the achievement in RFC3339. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ExportAchievementsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // number | The ID of the achievement. You can get this ID with the [List achievement](https://docs.talon.one/management-api#tag/Achievements/operation/listAchievements) endpoint.
    achievementId: 789,
  } satisfies ExportAchievementsRequest;

  try {
    const data = await api.exportAchievements(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **achievementId** | `number` | The ID of the achievement. You can get this ID with the [List achievement](https://docs.talon.one/management-api#tag/Achievements/operation/listAchievements) endpoint. | [Defaults to `undefined`] |

### Return type

**string**

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/csv`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportAudiencesMemberships

> string exportAudiencesMemberships(audienceId)

Export audience members

Download a CSV file containing the integration IDs of the members of an audience.  **Tip:** If the exported CSV file is too large to view, you can [split it into multiple files](https://www.makeuseof.com/tag/how-to-split-a-huge-csv-excel-workbook-into-seperate-files/).  The file contains the following column: - &#x60;profileintegrationid&#x60;: The integration ID of the customer profile. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ExportAudiencesMembershipsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the audience.
    audienceId: 789,
  } satisfies ExportAudiencesMembershipsRequest;

  try {
    const data = await api.exportAudiencesMemberships(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **audienceId** | `number` | The ID of the audience. | [Defaults to `undefined`] |

### Return type

**string**

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/csv`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid API key |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportCampaignStoreBudgets

> string exportCampaignStoreBudgets(applicationId, campaignId, action, period)

Export campaign store budgets

Download a CSV file containing the store budgets for a given campaign.  **Tip:** If the exported CSV file is too large to view, you can [split it into multiple files](https://www.makeuseof.com/tag/how-to-split-a-huge-csv-excel-workbook-into-seperate-files/).  The CSV file contains the following columns:  - &#x60;store_integration_id&#x60;: The identifier of the store. - &#x60;limit&#x60;: The budget limit for the store. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ExportCampaignStoreBudgetsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // 'setDiscount' | The action that this budget is limiting. (optional)
    action: action_example,
    // 'overall' | 'daily' | 'weekly' | 'monthly' | 'yearly' | The period to which the limit applies.  **Note**: For budgets with no period, set this to `overall`.  (optional)
    period: period_example,
  } satisfies ExportCampaignStoreBudgetsRequest;

  try {
    const data = await api.exportCampaignStoreBudgets(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **action** | `setDiscount` | The action that this budget is limiting. | [Optional] [Defaults to `undefined`] [Enum: setDiscount] |
| **period** | `overall`, `daily`, `weekly`, `monthly`, `yearly` | The period to which the limit applies.  **Note**: For budgets with no period, set this to &#x60;overall&#x60;.  | [Optional] [Defaults to `undefined`] [Enum: overall, daily, weekly, monthly, yearly] |

### Return type

**string**

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/csv`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid API key |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportCampaignStores

> string exportCampaignStores(applicationId, campaignId)

Export stores

Download a CSV file containing the stores linked to a specific campaign.  **Tip:** If the exported CSV file is too large to view, you can [split it into multiple files](https://www.makeuseof.com/tag/how-to-split-a-huge-csv-excel-workbook-into-seperate-files/).  The CSV file contains the following column:  - &#x60;store_integration_id&#x60;: The identifier of the store. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ExportCampaignStoresRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
  } satisfies ExportCampaignStoresRequest;

  try {
    const data = await api.exportCampaignStores(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |

### Return type

**string**

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/csv`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid API key |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportCollectionItems

> string exportCollectionItems(applicationId, campaignId, collectionId)

Export campaign-level collection\&#39;s items

Download a CSV file containing items from a given campaign-level collection.  **Tip:** If the exported CSV file is too large to view, you can [split it into multiple files](https://www.makeuseof.com/tag/how-to-split-a-huge-csv-excel-workbook-into-seperate-files/). 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ExportCollectionItemsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // number | The ID of the collection. You can get it with the [List collections in Application](#operation/listCollectionsInApplication) endpoint.
    collectionId: 789,
  } satisfies ExportCollectionItemsRequest;

  try {
    const data = await api.exportCollectionItems(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **collectionId** | `number` | The ID of the collection. You can get it with the [List collections in Application](#operation/listCollectionsInApplication) endpoint. | [Defaults to `undefined`] |

### Return type

**string**

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/csv`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportCoupons

> string exportCoupons(applicationId, campaignId, sort, value, createdBefore, createdAfter, valid, usable, referralId, recipientIntegrationId, batchId, exactMatch, dateFormat, campaignState, valuesOnly)

Export coupons

Download a CSV file containing the coupons that match the given properties.  **Tip:** If the exported CSV file is too large to view, you can [split it into multiple files](https://www.makeuseof.com/tag/how-to-split-a-huge-csv-excel-workbook-into-seperate-files/).  The CSV file can contain the following columns:  - &#x60;accountid&#x60;: The ID of your deployment. - &#x60;applicationid&#x60;: The ID of the Application this coupon is related to. - &#x60;attributes&#x60;: A json object describing _custom_ referral attribute names and their values. - &#x60;batchid&#x60;: The ID of the batch this coupon is part of. - &#x60;campaignid&#x60;: The ID of the campaign this coupon is related to. - &#x60;counter&#x60;: The number of times this coupon has been redeemed. - &#x60;created&#x60;: The creation date in RFC3339 of the coupon code. - &#x60;deleted&#x60;: Whether the coupon code is deleted. - &#x60;deleted_changelogid&#x60;: The ID of the delete event in the logs. - &#x60;discount_counter&#x60;: The amount of discount given by this coupon. - &#x60;discount_limitval&#x60;: The maximum discount amount that can be given be this coupon. - &#x60;expirydate&#x60;: The end date in RFC3339 of the code redemption period. - &#x60;id&#x60;: The internal ID of the coupon code. - &#x60;importid&#x60;: The ID of the import job that created this coupon. - &#x60;is_reservation_mandatory&#x60;: Whether this coupon requires a reservation to be redeemed. - &#x60;limits&#x60;: The limits set on this coupon. - &#x60;limitval&#x60;: The maximum number of redemptions of this code. - &#x60;recipientintegrationid&#x60;: The integration ID of the recipient of the coupon.   Only the customer with this integration ID can redeem this code. Available only for personal codes. - &#x60;referralid&#x60;: The ID of the referral code that triggered the creation of this coupon (create coupon effect). - &#x60;reservation&#x60;: Whether the coupon can be reserved for multiple customers. - &#x60;reservation_counter&#x60;: How many times this coupon has been reserved. - &#x60;reservation_limitval&#x60;: The maximum of number of reservations this coupon can have. - &#x60;startdate&#x60;: The start date in RFC3339 of the code redemption period. - &#x60;value&#x60;: The coupon code. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ExportCouponsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | Filter results by campaign ID. (optional)
    campaignId: 8.14,
    // string | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with `-`.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  (optional)
    sort: sort_example,
    // string | Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters. (optional)
    value: value_example,
    // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    createdBefore: 2013-10-20T19:20:30+01:00,
    // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    createdAfter: 2013-10-20T19:20:30+01:00,
    // 'expired' | 'validNow' | 'validFuture' | Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiration date is set and in the past. The second matches coupons in which start date is null or in the past and expiration date is null or in the future, the third matches coupons in which start date is set and in the future.  (optional)
    valid: valid_example,
    // 'true' | 'false' | Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`.  (optional)
    usable: usable_example,
    // number | Filter the results by matching them with the ID of a referral. This filter shows the coupons created by redeeming a referral code. (optional)
    referralId: 789,
    // string | Filter results by match with a profile id specified in the coupon\'s RecipientIntegrationId field. (optional)
    recipientIntegrationId: recipientIntegrationId_example,
    // string | Filter results by batches of coupons (optional)
    batchId: batchId_example,
    // boolean | Filter results to an exact case-insensitive matching against the coupon code. (optional)
    exactMatch: true,
    // 'excel' | 'ISO8601' | Determines the format of dates in the export document. (optional)
    dateFormat: dateFormat_example,
    // 'enabled' | 'disabled' | 'archived' | 'scheduled' | 'running' | 'expired' | 'staged' | Filter results by the state of the campaign.  - `enabled`: Campaigns that are scheduled, running (activated), or expired. - `running`: Campaigns that are running (activated). - `disabled`: Campaigns that are disabled. - `expired`: Campaigns that are expired. - `archived`: Campaigns that are archived.  (optional)
    campaignState: campaignState_example,
    // boolean | Filter results to only return the coupon codes (`value` column) without the associated coupon data. (optional)
    valuesOnly: true,
  } satisfies ExportCouponsRequest;

  try {
    const data = await api.exportCoupons(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | Filter results by campaign ID. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with &#x60;-&#x60;.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  | [Optional] [Defaults to `undefined`] |
| **value** | `string` | Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters. | [Optional] [Defaults to `undefined`] |
| **createdBefore** | `Date` | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **createdAfter** | `Date` | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **valid** | `expired`, `validNow`, `validFuture` | Either \&quot;expired\&quot;, \&quot;validNow\&quot;, or \&quot;validFuture\&quot;. The first option matches coupons in which the expiration date is set and in the past. The second matches coupons in which start date is null or in the past and expiration date is null or in the future, the third matches coupons in which start date is set and in the future.  | [Optional] [Defaults to `undefined`] [Enum: expired, validNow, validFuture] |
| **usable** | `true`, `false` | Either \&quot;true\&quot; or \&quot;false\&quot;. If \&quot;true\&quot;, only coupons where &#x60;usageCounter &lt; usageLimit&#x60; will be returned, \&quot;false\&quot; will return only coupons where &#x60;usageCounter &gt;&#x3D; usageLimit&#x60;.  | [Optional] [Defaults to `undefined`] [Enum: true, false] |
| **referralId** | `number` | Filter the results by matching them with the ID of a referral. This filter shows the coupons created by redeeming a referral code. | [Optional] [Defaults to `undefined`] |
| **recipientIntegrationId** | `string` | Filter results by match with a profile id specified in the coupon\&#39;s RecipientIntegrationId field. | [Optional] [Defaults to `undefined`] |
| **batchId** | `string` | Filter results by batches of coupons | [Optional] [Defaults to `undefined`] |
| **exactMatch** | `boolean` | Filter results to an exact case-insensitive matching against the coupon code. | [Optional] [Defaults to `false`] |
| **dateFormat** | `excel`, `ISO8601` | Determines the format of dates in the export document. | [Optional] [Defaults to `undefined`] [Enum: excel, ISO8601] |
| **campaignState** | `enabled`, `disabled`, `archived`, `scheduled`, `running`, `expired`, `staged` | Filter results by the state of the campaign.  - &#x60;enabled&#x60;: Campaigns that are scheduled, running (activated), or expired. - &#x60;running&#x60;: Campaigns that are running (activated). - &#x60;disabled&#x60;: Campaigns that are disabled. - &#x60;expired&#x60;: Campaigns that are expired. - &#x60;archived&#x60;: Campaigns that are archived.  | [Optional] [Defaults to `undefined`] [Enum: enabled, disabled, archived, scheduled, running, expired, staged] |
| **valuesOnly** | `boolean` | Filter results to only return the coupon codes (&#x60;value&#x60; column) without the associated coupon data. | [Optional] [Defaults to `false`] |

### Return type

**string**

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/csv`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportCustomerSessions

> string exportCustomerSessions(applicationId, createdBefore, createdAfter, profileIntegrationId, dateFormat, customerSessionState)

Export customer sessions

Download a CSV file containing the customer sessions that match the request.  **Important:** Archived sessions cannot be exported. See the [retention policy](https://docs.talon.one/docs/dev/server-infrastructure-and-data-retention).  **Tip:** If the exported CSV file is too large to view, you can [split it into multiple files](https://www.makeuseof.com/tag/how-to-split-a-huge-csv-excel-workbook-into-seperate-files/).  - &#x60;id&#x60;: The internal ID of the session. - &#x60;firstsession&#x60;: Whether this is a first session. - &#x60;integrationid&#x60;: The integration ID of the session. - &#x60;applicationid&#x60;: The ID of the Application. - &#x60;profileid&#x60;: The internal ID of the customer profile. - &#x60;profileintegrationid&#x60;: The integration ID of the customer profile. - &#x60;created&#x60;: The timestamp when the session was created. - &#x60;state&#x60;: The [state](https://docs.talon.one/docs/dev/concepts/entities/customer-sessions#customer-session-states) of the session. - &#x60;cartitems&#x60;: The cart items in the session. - &#x60;discounts&#x60;: The discounts in the session. - &#x60;total&#x60;: The total value of cart items and additional costs in the session, before any discounts are applied. - &#x60;attributes&#x60;: The attributes set in the session. - &#x60;closedat&#x60;: Timestamp when the session was closed. - &#x60;cancelledat&#x60;: Timestamp when the session was cancelled. - &#x60;referral&#x60;: The referral code in the session. - &#x60;identifiers&#x60;: The identifiers in the session. - &#x60;additional_costs&#x60;: The [additional costs](https://docs.talon.one/docs/product/account/dev-tools/managing-additional-costs) in the session. - &#x60;updated&#x60;: Timestamp of the last session update. - &#x60;store_integration_id&#x60;: The integration ID of the store. - &#x60;coupons&#x60;: Coupon codes in the session. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ExportCustomerSessionsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string. (optional)
    createdBefore: 2013-10-20T19:20:30+01:00,
    // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string. (optional)
    createdAfter: 2013-10-20T19:20:30+01:00,
    // string | Only return sessions for the customer that matches this customer integration ID. (optional)
    profileIntegrationId: profileIntegrationId_example,
    // 'excel' | 'ISO8601' | Determines the format of dates in the export document. (optional)
    dateFormat: dateFormat_example,
    // 'open' | 'closed' | 'partially_returned' | 'cancelled' | Filter results by state. (optional)
    customerSessionState: customerSessionState_example,
  } satisfies ExportCustomerSessionsRequest;

  try {
    const data = await api.exportCustomerSessions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **createdBefore** | `Date` | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string. | [Optional] [Defaults to `undefined`] |
| **createdAfter** | `Date` | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string. | [Optional] [Defaults to `undefined`] |
| **profileIntegrationId** | `string` | Only return sessions for the customer that matches this customer integration ID. | [Optional] [Defaults to `undefined`] |
| **dateFormat** | `excel`, `ISO8601` | Determines the format of dates in the export document. | [Optional] [Defaults to `undefined`] [Enum: excel, ISO8601] |
| **customerSessionState** | `open`, `closed`, `partially_returned`, `cancelled` | Filter results by state. | [Optional] [Defaults to `undefined`] [Enum: open, closed, partially_returned, cancelled] |

### Return type

**string**

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/csv`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportCustomersTiers

> string exportCustomersTiers(loyaltyProgramId, subledgerIds, tierNames)

Export customers\&#39; tier data

Download a CSV file containing the tier information for customers of the specified loyalty program.  The generated file contains the following columns:  - &#x60;programid&#x60;: The identifier of the loyalty program. It is displayed in your Talon.One deployment URL. - &#x60;subledgerid&#x60;: The ID of the subledger associated with the loyalty program. This column is empty if the loyalty program has no subledger. In this case, refer to the export file name to get the ID of the loyalty program. - &#x60;customerprofileid&#x60;: The ID used to integrate customer profiles with the loyalty program. - &#x60;tiername&#x60;: The name of the tier. - &#x60;startdate&#x60;: The tier start date in RFC3339. - &#x60;expirydate&#x60;: The tier expiry date in RFC3339.  You can filter the results by providing the following optional input parameters:  - &#x60;subledgerIds&#x60; (optional): Filter results by an array of subledger IDs. If no value is provided, all subledger data for the specified loyalty program will be exported. - &#x60;tierNames&#x60; (optional): Filter results by an array of tier names. If no value is provided, all tier data for the specified loyalty program will be exported. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ExportCustomersTiersRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // string | The identifier for the loyalty program.
    loyaltyProgramId: loyaltyProgramId_example,
    // Array<string> | An array of subledgers IDs to filter the export by. (optional)
    subledgerIds: ...,
    // Array<string> | An array of tier names to filter the export by. (optional)
    tierNames: ...,
  } satisfies ExportCustomersTiersRequest;

  try {
    const data = await api.exportCustomersTiers(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `string` | The identifier for the loyalty program. | [Defaults to `undefined`] |
| **subledgerIds** | `Array<string>` | An array of subledgers IDs to filter the export by. | [Optional] |
| **tierNames** | `Array<string>` | An array of tier names to filter the export by. | [Optional] |

### Return type

**string**

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/csv`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportEffects

> string exportEffects(applicationId, campaignId, createdBefore, createdAfter, dateFormat)

Export triggered effects

Download a CSV file containing the triggered effects that match the given attributes.  **Tip:** If the exported CSV file is too large to view, you can [split it into multiple files](https://www.makeuseof.com/tag/how-to-split-a-huge-csv-excel-workbook-into-seperate-files/).  The generated file can contain the following columns:  - &#x60;applicationid&#x60;: The ID of the Application. - &#x60;campaignid&#x60;: The ID of the campaign. - &#x60;couponid&#x60;: The ID of the coupon, when applicable to the effect. - &#x60;created&#x60;: The timestamp of the effect. - &#x60;event_type&#x60;: The name of the event. See the [docs](https://docs.talon.one/docs/dev/concepts/entities/events). - &#x60;eventid&#x60;: The internal ID of the effect. - &#x60;name&#x60;: The effect name. See the [docs](https://docs.talon.one/docs/dev/integration-api/api-effects). - &#x60;profileintegrationid&#x60;: The ID of the customer profile, when applicable. - &#x60;props&#x60;: The [properties](https://docs.talon.one/docs/dev/integration-api/api-effects) of the effect. - &#x60;ruleindex&#x60;: The index of the rule. - &#x60;rulesetid&#x60;: The ID of the rule set. - &#x60;sessionid&#x60;: The internal ID of the session that triggered the effect. - &#x60;profileid&#x60;: The internal ID of the customer profile. - &#x60;sessionintegrationid&#x60;: The integration ID of the session. - &#x60;total_revenue&#x60;: The total revenue. - &#x60;store_integration_id&#x60;: The integration ID of the store. You choose this ID when you create a store. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ExportEffectsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | Filter results by campaign ID. (optional)
    campaignId: 8.14,
    // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    createdBefore: 2013-10-20T19:20:30+01:00,
    // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    createdAfter: 2013-10-20T19:20:30+01:00,
    // 'excel' | 'ISO8601' | Determines the format of dates in the export document. (optional)
    dateFormat: dateFormat_example,
  } satisfies ExportEffectsRequest;

  try {
    const data = await api.exportEffects(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | Filter results by campaign ID. | [Optional] [Defaults to `undefined`] |
| **createdBefore** | `Date` | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **createdAfter** | `Date` | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **dateFormat** | `excel`, `ISO8601` | Determines the format of dates in the export document. | [Optional] [Defaults to `undefined`] [Enum: excel, ISO8601] |

### Return type

**string**

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/csv`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportLoyaltyBalance

> string exportLoyaltyBalance(loyaltyProgramId, endDate)

Export customer loyalty balance to CSV

⚠️ Deprecation notice: Support for requests to this endpoint will end soon. To export customer loyalty balances to CSV, use the [Export customer loyalty balances to CSV](/management-api#tag/Loyalty/operation/exportLoyaltyBalances) endpoint.  Download a CSV file containing the balance of each customer in the loyalty program.  **Tip:** If the exported CSV file is too large to view, you can [split it into multiple files](https://www.makeuseof.com/tag/how-to-split-a-huge-csv-excel-workbook-into-seperate-files/). 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ExportLoyaltyBalanceRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // string | The identifier for the loyalty program.
    loyaltyProgramId: loyaltyProgramId_example,
    // Date | Used to return expired, active, and pending loyalty balances before this timestamp. You can enter any past, present, or future timestamp value.  **Note:**  - It must be an RFC3339 timestamp string. - You can include a time component in your string, for example, `T23:59:59` to specify the end of the day. The time zone setting considered is `UTC`. If you do not include a time component, a default time value of `T00:00:00` (midnight) in `UTC` is considered.  (optional)
    endDate: 2013-10-20T19:20:30+01:00,
  } satisfies ExportLoyaltyBalanceRequest;

  try {
    const data = await api.exportLoyaltyBalance(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `string` | The identifier for the loyalty program. | [Defaults to `undefined`] |
| **endDate** | `Date` | Used to return expired, active, and pending loyalty balances before this timestamp. You can enter any past, present, or future timestamp value.  **Note:**  - It must be an RFC3339 timestamp string. - You can include a time component in your string, for example, &#x60;T23:59:59&#x60; to specify the end of the day. The time zone setting considered is &#x60;UTC&#x60;. If you do not include a time component, a default time value of &#x60;T00:00:00&#x60; (midnight) in &#x60;UTC&#x60; is considered.  | [Optional] [Defaults to `undefined`] |

### Return type

**string**

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/csv`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportLoyaltyBalances

> string exportLoyaltyBalances(loyaltyProgramId, endDate)

Export customer loyalty balances

Download a CSV file containing the balance of each customer in the loyalty program.  **Tip:** If the exported CSV file is too large to view, you can [split it into multiple files](https://www.makeuseof.com/tag/how-to-split-a-huge-csv-excel-workbook-into-seperate-files/).  The generated file can contain the following columns:  - &#x60;loyaltyProgramID&#x60;: The ID of the loyalty program. - &#x60;loyaltySubledger&#x60;: The name of the subdleger, when applicatble. - &#x60;profileIntegrationID&#x60;: The integration ID of the customer profile. - &#x60;currentBalance&#x60;: The current point balance. - &#x60;pendingBalance&#x60;: The number of pending points. - &#x60;expiredBalance&#x60;: The number of expired points. - &#x60;spentBalance&#x60;: The number of spent points. - &#x60;currentTier&#x60;: The tier that the customer is in at the time of the export. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ExportLoyaltyBalancesRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // string | The identifier for the loyalty program.
    loyaltyProgramId: loyaltyProgramId_example,
    // Date | Used to return expired, active, and pending loyalty balances before this timestamp. You can enter any past, present, or future timestamp value.  **Note:**  - It must be an RFC3339 timestamp string. - You can include a time component in your string, for example, `T23:59:59` to specify the end of the day. The time zone setting considered is `UTC`. If you do not include a time component, a default time value of `T00:00:00` (midnight) in `UTC` is considered. - This parameter does not affect the `currentTier` field in the CSV file,  which shows the customer\'s tier at the time of export.  (optional)
    endDate: 2013-10-20T19:20:30+01:00,
  } satisfies ExportLoyaltyBalancesRequest;

  try {
    const data = await api.exportLoyaltyBalances(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `string` | The identifier for the loyalty program. | [Defaults to `undefined`] |
| **endDate** | `Date` | Used to return expired, active, and pending loyalty balances before this timestamp. You can enter any past, present, or future timestamp value.  **Note:**  - It must be an RFC3339 timestamp string. - You can include a time component in your string, for example, &#x60;T23:59:59&#x60; to specify the end of the day. The time zone setting considered is &#x60;UTC&#x60;. If you do not include a time component, a default time value of &#x60;T00:00:00&#x60; (midnight) in &#x60;UTC&#x60; is considered. - This parameter does not affect the &#x60;currentTier&#x60; field in the CSV file,  which shows the customer\&#39;s tier at the time of export.  | [Optional] [Defaults to `undefined`] |

### Return type

**string**

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/csv`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportLoyaltyCardBalances

> string exportLoyaltyCardBalances(loyaltyProgramId, endDate)

Export all card transaction logs

Download a CSV file containing the balances of all cards in the loyalty program.  **Tip:** If the exported CSV file is too large to view, you can [split it into multiple files](https://www.makeuseof.com/tag/how-to-split-a-huge-csv-excel-workbook-into-seperate-files/).  The CSV file contains the following columns: - &#x60;loyaltyProgramID&#x60;: The ID of the loyalty program. - &#x60;loyaltySubledger&#x60;: The name of the subdleger, when applicatble. - &#x60;cardIdentifier&#x60;: The alphanumeric identifier of the loyalty card. - &#x60;cardState&#x60;:The state of the loyalty card. It can be &#x60;active&#x60; or &#x60;inactive&#x60;. - &#x60;currentBalance&#x60;: The current point balance. - &#x60;pendingBalance&#x60;: The number of pending points. - &#x60;expiredBalance&#x60;: The number of expired points. - &#x60;spentBalance&#x60;: The number of spent points. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ExportLoyaltyCardBalancesRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
    loyaltyProgramId: 789,
    // Date | Used to return expired, active, and pending loyalty balances before this timestamp. You can enter any past, present, or future timestamp value.  **Note:**  - It must be an RFC3339 timestamp string. - You can include a time component in your string, for example, `T23:59:59` to specify the end of the day. The time zone setting considered is `UTC`. If you do not include a time component, a default time value of `T00:00:00` (midnight) in `UTC` is considered.  (optional)
    endDate: 2013-10-20T19:20:30+01:00,
  } satisfies ExportLoyaltyCardBalancesRequest;

  try {
    const data = await api.exportLoyaltyCardBalances(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `number` | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | [Defaults to `undefined`] |
| **endDate** | `Date` | Used to return expired, active, and pending loyalty balances before this timestamp. You can enter any past, present, or future timestamp value.  **Note:**  - It must be an RFC3339 timestamp string. - You can include a time component in your string, for example, &#x60;T23:59:59&#x60; to specify the end of the day. The time zone setting considered is &#x60;UTC&#x60;. If you do not include a time component, a default time value of &#x60;T00:00:00&#x60; (midnight) in &#x60;UTC&#x60; is considered.  | [Optional] [Defaults to `undefined`] |

### Return type

**string**

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/csv`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportLoyaltyCardLedger

> string exportLoyaltyCardLedger(loyaltyProgramId, loyaltyCardId, rangeStart, rangeEnd, dateFormat)

Export card\&#39;s ledger log

Download a CSV file containing a loyalty card ledger log of the loyalty program.  **Tip:** If the exported CSV file is too large to view, you can [split it into multiple files](https://www.makeuseof.com/tag/how-to-split-a-huge-csv-excel-workbook-into-seperate-files/). 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ExportLoyaltyCardLedgerRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
    loyaltyProgramId: 789,
    // string | Identifier of the loyalty card. You can get the identifier with the [List loyalty cards](https://docs.talon.one/management-api#tag/Loyalty-cards/operation/getLoyaltyCards) endpoint. 
    loyaltyCardId: loyaltyCardId_example,
    // Date | Only return results from after this timestamp.  **Note:** - This must be an RFC3339 timestamp string. - You can include a time component in your string, for example, `T23:59:59` to specify the end of the day. The time zone setting considered is `UTC`. If you do not include a time component, a default time value of `T00:00:00` (midnight) in `UTC` is considered. 
    rangeStart: 2013-10-20T19:20:30+01:00,
    // Date | Only return results from before this timestamp.  **Note:** - This must be an RFC3339 timestamp string. - You can include a time component in your string, for example, `T23:59:59` to specify the end of the day. The time zone setting considered is `UTC`. If you do not include a time component, a default time value of `T00:00:00` (midnight) in `UTC` is considered. 
    rangeEnd: 2013-10-20T19:20:30+01:00,
    // 'excel' | 'ISO8601' | Determines the format of dates in the export document. (optional)
    dateFormat: dateFormat_example,
  } satisfies ExportLoyaltyCardLedgerRequest;

  try {
    const data = await api.exportLoyaltyCardLedger(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `number` | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | [Defaults to `undefined`] |
| **loyaltyCardId** | `string` | Identifier of the loyalty card. You can get the identifier with the [List loyalty cards](https://docs.talon.one/management-api#tag/Loyalty-cards/operation/getLoyaltyCards) endpoint.  | [Defaults to `undefined`] |
| **rangeStart** | `Date` | Only return results from after this timestamp.  **Note:** - This must be an RFC3339 timestamp string. - You can include a time component in your string, for example, &#x60;T23:59:59&#x60; to specify the end of the day. The time zone setting considered is &#x60;UTC&#x60;. If you do not include a time component, a default time value of &#x60;T00:00:00&#x60; (midnight) in &#x60;UTC&#x60; is considered.  | [Defaults to `undefined`] |
| **rangeEnd** | `Date` | Only return results from before this timestamp.  **Note:** - This must be an RFC3339 timestamp string. - You can include a time component in your string, for example, &#x60;T23:59:59&#x60; to specify the end of the day. The time zone setting considered is &#x60;UTC&#x60;. If you do not include a time component, a default time value of &#x60;T00:00:00&#x60; (midnight) in &#x60;UTC&#x60; is considered.  | [Defaults to `undefined`] |
| **dateFormat** | `excel`, `ISO8601` | Determines the format of dates in the export document. | [Optional] [Defaults to `undefined`] [Enum: excel, ISO8601] |

### Return type

**string**

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/csv`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportLoyaltyCards

> string exportLoyaltyCards(loyaltyProgramId, batchId, createdBefore, createdAfter, dateFormat)

Export loyalty cards

Download a CSV file containing the loyalty cards from a specified loyalty program.  **Tip:** If the exported CSV file is too large to view, you can [split it into multiple files](https://www.makeuseof.com/tag/how-to-split-a-huge-csv-excel-workbook-into-seperate-files/).  The CSV file contains the following columns: - &#x60;identifier&#x60;: The unique identifier of the loyalty card. - &#x60;created&#x60;: The date and time the loyalty card was created. - &#x60;status&#x60;: The status of the loyalty card. - &#x60;userpercardlimit&#x60;: The maximum number of customer profiles that can be linked to the card. - &#x60;customerprofileids&#x60;: Integration IDs of the customer profiles linked to the card. - &#x60;blockreason&#x60;: The reason for transferring and blocking the loyalty card. - &#x60;generated&#x60;: An indicator of whether the loyalty card was generated. - &#x60;batchid&#x60;: The ID of the batch the loyalty card is in. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ExportLoyaltyCardsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
    loyaltyProgramId: 789,
    // string | Filter results by loyalty card batch ID. (optional)
    batchId: batchId_example,
    // Date | Only return loyalty cards created before this timestamp.  **Note:** - This must be an RFC3339 timestamp string.  (optional)
    createdBefore: 2013-10-20T19:20:30+01:00,
    // Date | Only return loyalty cards created after this timestamp.  **Note:** - This must be an RFC3339 timestamp string.  (optional)
    createdAfter: 2013-10-20T19:20:30+01:00,
    // 'excel' | 'ISO8601' | Determines the format of dates in the export document. (optional)
    dateFormat: dateFormat_example,
  } satisfies ExportLoyaltyCardsRequest;

  try {
    const data = await api.exportLoyaltyCards(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `number` | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | [Defaults to `undefined`] |
| **batchId** | `string` | Filter results by loyalty card batch ID. | [Optional] [Defaults to `undefined`] |
| **createdBefore** | `Date` | Only return loyalty cards created before this timestamp.  **Note:** - This must be an RFC3339 timestamp string.  | [Optional] [Defaults to `undefined`] |
| **createdAfter** | `Date` | Only return loyalty cards created after this timestamp.  **Note:** - This must be an RFC3339 timestamp string.  | [Optional] [Defaults to `undefined`] |
| **dateFormat** | `excel`, `ISO8601` | Determines the format of dates in the export document. | [Optional] [Defaults to `undefined`] [Enum: excel, ISO8601] |

### Return type

**string**

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/csv`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportLoyaltyLedger

> string exportLoyaltyLedger(rangeStart, rangeEnd, loyaltyProgramId, integrationId, dateFormat)

Export customer\&#39;s transaction logs

Download a CSV file containing a customer\&#39;s transaction logs in the loyalty program.  **Tip:** If the exported CSV file is too large to view, you can [split it into multiple files](https://www.makeuseof.com/tag/how-to-split-a-huge-csv-excel-workbook-into-seperate-files/).  The generated file can contain the following columns:  - &#x60;customerprofileid&#x60;: The ID of the profile. - &#x60;customersessionid&#x60;: The ID of the customer session. - &#x60;rulesetid&#x60;: The ID of the rule set. - &#x60;rulename&#x60;: The name of the rule. - &#x60;programid&#x60;: The ID of the loyalty program. - &#x60;type&#x60;: The transaction type, such as &#x60;addition&#x60; or &#x60;subtraction&#x60;. - &#x60;name&#x60;: The reason for the transaction. - &#x60;subledgerid&#x60;: The ID of the subledger, when applicable. - &#x60;startdate&#x60;: The start date of the program. - &#x60;expirydate&#x60;: The expiration date of the program. - &#x60;id&#x60;: The ID of the transaction. - &#x60;created&#x60;: The timestamp of the creation of the loyalty program. - &#x60;amount&#x60;: The number of points in that transaction. - &#x60;archived&#x60;: Whether the session related to the transaction is archived. - &#x60;campaignid&#x60;: The ID of the campaign. - &#x60;flags&#x60;: The flags of the transaction, when applicable. The &#x60;createsNegativeBalance&#x60; flag indicates whether the transaction results in a negative balance. - &#x60;transactionUUID&#x60;: Unique identifier of the transaction in the UUID format. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ExportLoyaltyLedgerRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // Date | Only return results from after this timestamp.  **Note:** - This must be an RFC3339 timestamp string. - You can include a time component in your string, for example, `T23:59:59` to specify the end of the day. The time zone setting considered is `UTC`. If you do not include a time component, a default time value of `T00:00:00` (midnight) in `UTC` is considered. 
    rangeStart: 2013-10-20T19:20:30+01:00,
    // Date | Only return results from before this timestamp.  **Note:** - This must be an RFC3339 timestamp string. - You can include a time component in your string, for example, `T23:59:59` to specify the end of the day. The time zone setting considered is `UTC`. If you do not include a time component, a default time value of `T00:00:00` (midnight) in `UTC` is considered. 
    rangeEnd: 2013-10-20T19:20:30+01:00,
    // string | The identifier for the loyalty program.
    loyaltyProgramId: loyaltyProgramId_example,
    // string | The integration identifier for this customer profile. Must be: - Unique within the deployment. - Stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  Once set, you cannot update this identifier. 
    integrationId: integrationId_example,
    // 'excel' | 'ISO8601' | Determines the format of dates in the export document. (optional)
    dateFormat: dateFormat_example,
  } satisfies ExportLoyaltyLedgerRequest;

  try {
    const data = await api.exportLoyaltyLedger(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **rangeStart** | `Date` | Only return results from after this timestamp.  **Note:** - This must be an RFC3339 timestamp string. - You can include a time component in your string, for example, &#x60;T23:59:59&#x60; to specify the end of the day. The time zone setting considered is &#x60;UTC&#x60;. If you do not include a time component, a default time value of &#x60;T00:00:00&#x60; (midnight) in &#x60;UTC&#x60; is considered.  | [Defaults to `undefined`] |
| **rangeEnd** | `Date` | Only return results from before this timestamp.  **Note:** - This must be an RFC3339 timestamp string. - You can include a time component in your string, for example, &#x60;T23:59:59&#x60; to specify the end of the day. The time zone setting considered is &#x60;UTC&#x60;. If you do not include a time component, a default time value of &#x60;T00:00:00&#x60; (midnight) in &#x60;UTC&#x60; is considered.  | [Defaults to `undefined`] |
| **loyaltyProgramId** | `string` | The identifier for the loyalty program. | [Defaults to `undefined`] |
| **integrationId** | `string` | The integration identifier for this customer profile. Must be: - Unique within the deployment. - Stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  Once set, you cannot update this identifier.  | [Defaults to `undefined`] |
| **dateFormat** | `excel`, `ISO8601` | Determines the format of dates in the export document. | [Optional] [Defaults to `undefined`] [Enum: excel, ISO8601] |

### Return type

**string**

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/csv`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportPoolGiveaways

> string exportPoolGiveaways(poolId, createdBefore, createdAfter)

Export giveaway codes of a giveaway pool

Download a CSV file containing the giveaway codes of a specific giveaway pool.  **Tip:** If the exported CSV file is too large to view, you can [split it into multiple files](https://www.makeuseof.com/tag/how-to-split-a-huge-csv-excel-workbook-into-seperate-files/).  The CSV file contains the following columns:  - &#x60;id&#x60;: The internal ID of the giveaway. - &#x60;poolid&#x60;: The internal ID of the giveaway pool. - &#x60;code&#x60;: The giveaway code. - &#x60;startdate&#x60;: The validity start date in RFC3339 of the giveaway (can be empty). - &#x60;enddate&#x60;: The validity end date in RFC3339 of the giveaway (can be empty). - &#x60;attributes&#x60;: Any custom attributes associated with the giveaway code (can be empty). - &#x60;used&#x60;: An indication of whether the giveaway is already awarded. - &#x60;importid&#x60;: The ID of the import which created the giveaway. - &#x60;created&#x60;: The creation time of the giveaway code. - &#x60;profileintegrationid&#x60;: The third-party integration ID of the customer profile that was awarded the giveaway. Can be empty if the giveaway was not awarded. - &#x60;profileid&#x60;: The internal ID of the customer profile that was awarded the giveaway. Can be empty if the giveaway was not awarded or an internal ID does not exist. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ExportPoolGiveawaysRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the pool. You can find it in the Campaign Manager, in the **Giveaways** section.
    poolId: 789,
    // Date | Timestamp that filters the results to only contain giveaways created before this date. Must be an RFC3339 timestamp string. (optional)
    createdBefore: 2013-10-20T19:20:30+01:00,
    // Date | Timestamp that filters the results to only contain giveaways created after this date. Must be an RFC3339 timestamp string. (optional)
    createdAfter: 2013-10-20T19:20:30+01:00,
  } satisfies ExportPoolGiveawaysRequest;

  try {
    const data = await api.exportPoolGiveaways(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **poolId** | `number` | The ID of the pool. You can find it in the Campaign Manager, in the **Giveaways** section. | [Defaults to `undefined`] |
| **createdBefore** | `Date` | Timestamp that filters the results to only contain giveaways created before this date. Must be an RFC3339 timestamp string. | [Optional] [Defaults to `undefined`] |
| **createdAfter** | `Date` | Timestamp that filters the results to only contain giveaways created after this date. Must be an RFC3339 timestamp string. | [Optional] [Defaults to `undefined`] |

### Return type

**string**

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/csv`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## exportReferrals

> string exportReferrals(applicationId, campaignId, createdBefore, createdAfter, valid, usable, batchId, dateFormat)

Export referrals

Download a CSV file containing the referrals that match the given parameters.  **Tip:** If the exported CSV file is too large to view, you can [split it into multiple files](https://www.makeuseof.com/tag/how-to-split-a-huge-csv-excel-workbook-into-seperate-files/).  The CSV file contains the following columns:  - &#x60;code&#x60;: The referral code. - &#x60;advocateprofileintegrationid&#x60;: The profile ID of the advocate. - &#x60;startdate&#x60;: The start date in RFC3339 of the code redemption period. - &#x60;expirydate&#x60;: The end date in RFC3339 of the code redemption period. - &#x60;limitval&#x60;: The maximum number of redemptions of this code. Defaults to &#x60;1&#x60; when left blank. - &#x60;attributes&#x60;: A json object describing _custom_ referral attribute names and their values. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ExportReferralsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | Filter results by campaign ID. (optional)
    campaignId: 8.14,
    // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    createdBefore: 2013-10-20T19:20:30+01:00,
    // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    createdAfter: 2013-10-20T19:20:30+01:00,
    // 'expired' | 'validNow' | 'validFuture' | - `expired`: Matches referrals in which the expiration date is set and in the past. - `validNow`: Matches referrals in which start date is null or in the past and expiration date is null or in the future. - `validFuture`: Matches referrals in which start date is set and in the future.  (optional)
    valid: valid_example,
    // 'true' | 'false' | - `true`, only referrals where `usageCounter < usageLimit` will be returned. - `false`, only referrals where `usageCounter >= usageLimit` will be returned.  (optional)
    usable: usable_example,
    // string | Filter results by batches of referrals (optional)
    batchId: batchId_example,
    // 'excel' | 'ISO8601' | Determines the format of dates in the export document. (optional)
    dateFormat: dateFormat_example,
  } satisfies ExportReferralsRequest;

  try {
    const data = await api.exportReferrals(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | Filter results by campaign ID. | [Optional] [Defaults to `undefined`] |
| **createdBefore** | `Date` | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **createdAfter** | `Date` | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **valid** | `expired`, `validNow`, `validFuture` | - &#x60;expired&#x60;: Matches referrals in which the expiration date is set and in the past. - &#x60;validNow&#x60;: Matches referrals in which start date is null or in the past and expiration date is null or in the future. - &#x60;validFuture&#x60;: Matches referrals in which start date is set and in the future.  | [Optional] [Defaults to `undefined`] [Enum: expired, validNow, validFuture] |
| **usable** | `true`, `false` | - &#x60;true&#x60;, only referrals where &#x60;usageCounter &lt; usageLimit&#x60; will be returned. - &#x60;false&#x60;, only referrals where &#x60;usageCounter &gt;&#x3D; usageLimit&#x60; will be returned.  | [Optional] [Defaults to `undefined`] [Enum: true, false] |
| **batchId** | `string` | Filter results by batches of referrals | [Optional] [Defaults to `undefined`] |
| **dateFormat** | `excel`, `ISO8601` | Determines the format of dates in the export document. | [Optional] [Defaults to `undefined`] [Enum: excel, ISO8601] |

### Return type

**string**

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/csv`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## generateCouponRejections

> GenerateCouponRejections200Response generateCouponRejections(sessionIntegrationId, applicationId, language, couponCode)

Summarize coupon redemption failures in session

Create a summary of the reasons for coupon redemption failures in a given customer session. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GenerateCouponRejectionsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // string | The integration ID of the session to summarize.
    sessionIntegrationId: sessionIntegrationId_example,
    // number | Filter results by Application ID. (optional)
    applicationId: 8.14,
    // string | The [ISO-639](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) code of the language in which the summary will be generated.  (optional)
    language: language_example,
    // string | The coupon code for which to get the rejection reason. (optional)
    couponCode: couponCode_example,
  } satisfies GenerateCouponRejectionsRequest;

  try {
    const data = await api.generateCouponRejections(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **sessionIntegrationId** | `string` | The integration ID of the session to summarize. | [Defaults to `undefined`] |
| **applicationId** | `number` | Filter results by Application ID. | [Optional] [Defaults to `undefined`] |
| **language** | `string` | The [ISO-639](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) code of the language in which the summary will be generated.  | [Optional] [Defaults to `undefined`] |
| **couponCode** | `string` | The coupon code for which to get the rejection reason. | [Optional] [Defaults to `undefined`] |

### Return type

[**GenerateCouponRejections200Response**](GenerateCouponRejections200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAccessLogsWithoutTotalCount

> GetAccessLogsWithoutTotalCount200Response getAccessLogsWithoutTotalCount(applicationId, rangeStart, rangeEnd, path, method, status, pageSize, skip, sort)

Get access logs for Application

Retrieve the list of API calls sent to the specified Application. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetAccessLogsWithoutTotalCountRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // Date | Only return results from after this timestamp.  **Note:** - This must be an RFC3339 timestamp string. - You can include a time component in your string, for example, `T23:59:59` to specify the end of the day. The time zone setting considered is `UTC`. If you do not include a time component, a default time value of `T00:00:00` (midnight) in `UTC` is considered. 
    rangeStart: 2013-10-20T19:20:30+01:00,
    // Date | Only return results from before this timestamp.  **Note:** - This must be an RFC3339 timestamp string. - You can include a time component in your string, for example, `T23:59:59` to specify the end of the day. The time zone setting considered is `UTC`. If you do not include a time component, a default time value of `T00:00:00` (midnight) in `UTC` is considered. 
    rangeEnd: 2013-10-20T19:20:30+01:00,
    // string | Only return results where the request path matches the given regular expression. (optional)
    path: path_example,
    // 'get' | 'put' | 'post' | 'delete' | 'patch' | Only return results where the request method matches the given regular expression. (optional)
    method: method_example,
    // 'success' | 'error' | Filter results by HTTP status codes. (optional)
    status: status_example,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // string | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with `-`.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  (optional)
    sort: sort_example,
  } satisfies GetAccessLogsWithoutTotalCountRequest;

  try {
    const data = await api.getAccessLogsWithoutTotalCount(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **rangeStart** | `Date` | Only return results from after this timestamp.  **Note:** - This must be an RFC3339 timestamp string. - You can include a time component in your string, for example, &#x60;T23:59:59&#x60; to specify the end of the day. The time zone setting considered is &#x60;UTC&#x60;. If you do not include a time component, a default time value of &#x60;T00:00:00&#x60; (midnight) in &#x60;UTC&#x60; is considered.  | [Defaults to `undefined`] |
| **rangeEnd** | `Date` | Only return results from before this timestamp.  **Note:** - This must be an RFC3339 timestamp string. - You can include a time component in your string, for example, &#x60;T23:59:59&#x60; to specify the end of the day. The time zone setting considered is &#x60;UTC&#x60;. If you do not include a time component, a default time value of &#x60;T00:00:00&#x60; (midnight) in &#x60;UTC&#x60; is considered.  | [Defaults to `undefined`] |
| **path** | `string` | Only return results where the request path matches the given regular expression. | [Optional] [Defaults to `undefined`] |
| **method** | `get`, `put`, `post`, `delete`, `patch` | Only return results where the request method matches the given regular expression. | [Optional] [Defaults to `undefined`] [Enum: get, put, post, delete, patch] |
| **status** | `success`, `error` | Filter results by HTTP status codes. | [Optional] [Defaults to `undefined`] [Enum: success, error] |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with &#x60;-&#x60;.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  | [Optional] [Defaults to `undefined`] |

### Return type

[**GetAccessLogsWithoutTotalCount200Response**](GetAccessLogsWithoutTotalCount200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAccount

> Account getAccount(accountId)

Get account details

Return the details of your companies Talon.One account. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetAccountRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The identifier of the account. Retrieve it via the [List users in account](https://docs.talon.one/management-api#operation/getUsers) endpoint in the `accountId` property. 
    accountId: 789,
  } satisfies GetAccountRequest;

  try {
    const data = await api.getAccount(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **accountId** | `number` | The identifier of the account. Retrieve it via the [List users in account](https://docs.talon.one/management-api#operation/getUsers) endpoint in the &#x60;accountId&#x60; property.  | [Defaults to `undefined`] |

### Return type

[**Account**](Account.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAccountAnalytics

> AccountAnalytics getAccountAnalytics(accountId)

Get account analytics

Return the analytics of your Talon.One account. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetAccountAnalyticsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The identifier of the account. Retrieve it via the [List users in account](https://docs.talon.one/management-api#operation/getUsers) endpoint in the `accountId` property. 
    accountId: 789,
  } satisfies GetAccountAnalyticsRequest;

  try {
    const data = await api.getAccountAnalytics(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **accountId** | `number` | The identifier of the account. Retrieve it via the [List users in account](https://docs.talon.one/management-api#operation/getUsers) endpoint in the &#x60;accountId&#x60; property.  | [Defaults to `undefined`] |

### Return type

[**AccountAnalytics**](AccountAnalytics.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAccountCollection

> Collection getAccountCollection(collectionId)

Get account-level collection

Retrieve a given account-level collection.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetAccountCollectionRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the collection. You can get it with the [List collections in account](#operation/listAccountCollections) endpoint.
    collectionId: 789,
  } satisfies GetAccountCollectionRequest;

  try {
    const data = await api.getAccountCollection(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **collectionId** | `number` | The ID of the collection. You can get it with the [List collections in account](#operation/listAccountCollections) endpoint. | [Defaults to `undefined`] |

### Return type

[**Collection**](Collection.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAchievement

> Achievement getAchievement(applicationId, campaignId, achievementId)

Get achievement

Get the details of a specific achievement.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetAchievementRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // number | The ID of the achievement. You can get this ID with the [List achievement](https://docs.talon.one/management-api#tag/Achievements/operation/listAchievements) endpoint.
    achievementId: 789,
  } satisfies GetAchievementRequest;

  try {
    const data = await api.getAchievement(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **achievementId** | `number` | The ID of the achievement. You can get this ID with the [List achievement](https://docs.talon.one/management-api#tag/Achievements/operation/listAchievements) endpoint. | [Defaults to `undefined`] |

### Return type

[**Achievement**](Achievement.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAdditionalCost

> AccountAdditionalCost getAdditionalCost(additionalCostId)

Get additional cost

Returns the additional cost. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetAdditionalCostRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the additional cost. You can find the ID the the Campaign Manager\'s URL when you display the details of the cost in **Account** > **Tools** > **Additional costs**. 
    additionalCostId: 789,
  } satisfies GetAdditionalCostRequest;

  try {
    const data = await api.getAdditionalCost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **additionalCostId** | `number` | The ID of the additional cost. You can find the ID the the Campaign Manager\&#39;s URL when you display the details of the cost in **Account** &gt; **Tools** &gt; **Additional costs**.  | [Defaults to `undefined`] |

### Return type

[**AccountAdditionalCost**](AccountAdditionalCost.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAdditionalCosts

> GetAdditionalCosts200Response getAdditionalCosts(pageSize, skip, sort)

List additional costs

Returns all the defined additional costs for the account. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetAdditionalCostsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // string | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with `-`.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  (optional)
    sort: sort_example,
  } satisfies GetAdditionalCostsRequest;

  try {
    const data = await api.getAdditionalCosts(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with &#x60;-&#x60;.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  | [Optional] [Defaults to `undefined`] |

### Return type

[**GetAdditionalCosts200Response**](GetAdditionalCosts200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getApplication

> Application getApplication(applicationId)

Get Application

Get the application specified by the ID.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetApplicationRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
  } satisfies GetApplicationRequest;

  try {
    const data = await api.getApplication(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |

### Return type

[**Application**](Application.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getApplicationApiHealth

> ApplicationApiHealth getApplicationApiHealth(applicationId)

Get Application health

Display the health of the Application and show the last time the Application was used.  You can also find this information in the Campaign Manager. In your Application, click **Settings** &gt; **Integration API Keys**. See the [docs](https://docs.talon.one/docs/dev/tutorials/monitoring-integration-status). 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetApplicationApiHealthRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
  } satisfies GetApplicationApiHealthRequest;

  try {
    const data = await api.getApplicationApiHealth(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |

### Return type

[**ApplicationApiHealth**](ApplicationApiHealth.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getApplicationCustomer

> ApplicationCustomer getApplicationCustomer(applicationId, customerId)

Get application\&#39;s customer

Retrieve the customers of the specified application. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetApplicationCustomerRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The value of the `id` property of a customer profile. Get it with the [List Application\'s customers](https://docs.talon.one/management-api#operation/getApplicationCustomers) endpoint. 
    customerId: 789,
  } satisfies GetApplicationCustomerRequest;

  try {
    const data = await api.getApplicationCustomer(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **customerId** | `number` | The value of the &#x60;id&#x60; property of a customer profile. Get it with the [List Application\&#39;s customers](https://docs.talon.one/management-api#operation/getApplicationCustomers) endpoint.  | [Defaults to `undefined`] |

### Return type

[**ApplicationCustomer**](ApplicationCustomer.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getApplicationCustomerFriends

> GetApplicationCustomerFriends200Response getApplicationCustomerFriends(applicationId, integrationId, pageSize, skip, sort, withTotalResultSize)

List friends referred by customer profile

List the friends referred by the specified customer profile in this Application. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetApplicationCustomerFriendsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // string | The Integration ID of the Advocate\'s Profile.
    integrationId: integrationId_example,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // string | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with `-`.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  (optional)
    sort: sort_example,
    // boolean | When this flag is set, the result includes the total size of the result, across all pages. This might decrease performance on large data sets.  - When `true`: `hasMore` is true when there is a next page. `totalResultSize` is always zero. - When `false`: `hasMore` is always false. `totalResultSize` contains the total number of results for this query.  (optional)
    withTotalResultSize: true,
  } satisfies GetApplicationCustomerFriendsRequest;

  try {
    const data = await api.getApplicationCustomerFriends(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **integrationId** | `string` | The Integration ID of the Advocate\&#39;s Profile. | [Defaults to `undefined`] |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with &#x60;-&#x60;.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  | [Optional] [Defaults to `undefined`] |
| **withTotalResultSize** | `boolean` | When this flag is set, the result includes the total size of the result, across all pages. This might decrease performance on large data sets.  - When &#x60;true&#x60;: &#x60;hasMore&#x60; is true when there is a next page. &#x60;totalResultSize&#x60; is always zero. - When &#x60;false&#x60;: &#x60;hasMore&#x60; is always false. &#x60;totalResultSize&#x60; contains the total number of results for this query.  | [Optional] [Defaults to `undefined`] |

### Return type

[**GetApplicationCustomerFriends200Response**](GetApplicationCustomerFriends200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getApplicationCustomers

> GetApplicationCustomers200Response getApplicationCustomers(applicationId, integrationId, pageSize, skip, withTotalResultSize)

List application\&#39;s customers

List all the customers of the specified application.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetApplicationCustomersRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // string | Filter results performing an exact matching against the profile integration identifier. (optional)
    integrationId: integrationId_example,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // boolean | When this flag is set, the result includes the total size of the result, across all pages. This might decrease performance on large data sets.  - When `true`: `hasMore` is true when there is a next page. `totalResultSize` is always zero. - When `false`: `hasMore` is always false. `totalResultSize` contains the total number of results for this query.  (optional)
    withTotalResultSize: true,
  } satisfies GetApplicationCustomersRequest;

  try {
    const data = await api.getApplicationCustomers(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **integrationId** | `string` | Filter results performing an exact matching against the profile integration identifier. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **withTotalResultSize** | `boolean` | When this flag is set, the result includes the total size of the result, across all pages. This might decrease performance on large data sets.  - When &#x60;true&#x60;: &#x60;hasMore&#x60; is true when there is a next page. &#x60;totalResultSize&#x60; is always zero. - When &#x60;false&#x60;: &#x60;hasMore&#x60; is always false. &#x60;totalResultSize&#x60; contains the total number of results for this query.  | [Optional] [Defaults to `undefined`] |

### Return type

[**GetApplicationCustomers200Response**](GetApplicationCustomers200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getApplicationCustomersByAttributes

> GetApplicationCustomersByAttributes200Response getApplicationCustomersByAttributes(applicationId, customerProfileSearchQuery, pageSize, skip, withTotalResultSize)

List application customers matching the given attributes

Get a list of the application customers matching the provided criteria.  The match is successful if all the attributes of the request are found in a profile, even if the profile has more attributes that are not present on the request. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetApplicationCustomersByAttributesRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // CustomerProfileSearchQuery | body
    customerProfileSearchQuery: ...,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // boolean | When this flag is set, the result includes the total size of the result, across all pages. This might decrease performance on large data sets.  - When `true`: `hasMore` is true when there is a next page. `totalResultSize` is always zero. - When `false`: `hasMore` is always false. `totalResultSize` contains the total number of results for this query.  (optional)
    withTotalResultSize: true,
  } satisfies GetApplicationCustomersByAttributesRequest;

  try {
    const data = await api.getApplicationCustomersByAttributes(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **customerProfileSearchQuery** | [CustomerProfileSearchQuery](CustomerProfileSearchQuery.md) | body | |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **withTotalResultSize** | `boolean` | When this flag is set, the result includes the total size of the result, across all pages. This might decrease performance on large data sets.  - When &#x60;true&#x60;: &#x60;hasMore&#x60; is true when there is a next page. &#x60;totalResultSize&#x60; is always zero. - When &#x60;false&#x60;: &#x60;hasMore&#x60; is always false. &#x60;totalResultSize&#x60; contains the total number of results for this query.  | [Optional] [Defaults to `undefined`] |

### Return type

[**GetApplicationCustomersByAttributes200Response**](GetApplicationCustomersByAttributes200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getApplicationEventTypes

> GetApplicationEventTypes200Response getApplicationEventTypes(applicationId, pageSize, skip, sort)

List Applications event types

Get all of the distinct values of the Event &#x60;type&#x60; property for events recorded in the application.  See also: [Track an event](https://docs.talon.one/integration-api#tag/Events/operation/trackEventV2) 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetApplicationEventTypesRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // string | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with `-`.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  (optional)
    sort: sort_example,
  } satisfies GetApplicationEventTypesRequest;

  try {
    const data = await api.getApplicationEventTypes(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with &#x60;-&#x60;.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  | [Optional] [Defaults to `undefined`] |

### Return type

[**GetApplicationEventTypes200Response**](GetApplicationEventTypes200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getApplicationEventsWithoutTotalCount

> GetApplicationEventsWithoutTotalCount200Response getApplicationEventsWithoutTotalCount(applicationId, pageSize, skip, sort, type, createdBefore, createdAfter, session, profile, customerName, customerEmail, couponCode, referralCode, ruleQuery, campaignQuery, effectType)

List Applications events

Lists all events recorded for an application. Instead of having the total number of results in the response, this endpoint only mentions whether there are more results. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetApplicationEventsWithoutTotalCountRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // string | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with `-`.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  (optional)
    sort: sort_example,
    // string | Comma-separated list of types by which to filter events. Must be exact match(es). (optional)
    type: type_example,
    // Date | Only return events created before this date. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    createdBefore: 2013-10-20T19:20:30+01:00,
    // Date | Only return events created after this date. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    createdAfter: 2013-10-20T19:20:30+01:00,
    // string | Session integration ID filter for events. Must be exact match. (optional)
    session: session_example,
    // string | Profile integration ID filter for events. Must be exact match. (optional)
    profile: profile_example,
    // string | Customer name filter for events. Will match substrings case-insensitively. (optional)
    customerName: customerName_example,
    // string | Customer e-mail address filter for events. Will match substrings case-insensitively. (optional)
    customerEmail: customerEmail_example,
    // string | Coupon code (optional)
    couponCode: couponCode_example,
    // string | Referral code (optional)
    referralCode: referralCode_example,
    // string | Rule name filter for events (optional)
    ruleQuery: ruleQuery_example,
    // string | Campaign name filter for events (optional)
    campaignQuery: campaignQuery_example,
    // string | The type of effect that was triggered. See [API effects](https://docs.talon.one/docs/dev/integration-api/api-effects). (optional)
    effectType: effectType_example,
  } satisfies GetApplicationEventsWithoutTotalCountRequest;

  try {
    const data = await api.getApplicationEventsWithoutTotalCount(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with &#x60;-&#x60;.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  | [Optional] [Defaults to `undefined`] |
| **type** | `string` | Comma-separated list of types by which to filter events. Must be exact match(es). | [Optional] [Defaults to `undefined`] |
| **createdBefore** | `Date` | Only return events created before this date. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **createdAfter** | `Date` | Only return events created after this date. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **session** | `string` | Session integration ID filter for events. Must be exact match. | [Optional] [Defaults to `undefined`] |
| **profile** | `string` | Profile integration ID filter for events. Must be exact match. | [Optional] [Defaults to `undefined`] |
| **customerName** | `string` | Customer name filter for events. Will match substrings case-insensitively. | [Optional] [Defaults to `undefined`] |
| **customerEmail** | `string` | Customer e-mail address filter for events. Will match substrings case-insensitively. | [Optional] [Defaults to `undefined`] |
| **couponCode** | `string` | Coupon code | [Optional] [Defaults to `undefined`] |
| **referralCode** | `string` | Referral code | [Optional] [Defaults to `undefined`] |
| **ruleQuery** | `string` | Rule name filter for events | [Optional] [Defaults to `undefined`] |
| **campaignQuery** | `string` | Campaign name filter for events | [Optional] [Defaults to `undefined`] |
| **effectType** | `string` | The type of effect that was triggered. See [API effects](https://docs.talon.one/docs/dev/integration-api/api-effects). | [Optional] [Defaults to `undefined`] |

### Return type

[**GetApplicationEventsWithoutTotalCount200Response**](GetApplicationEventsWithoutTotalCount200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getApplicationSession

> ApplicationSession getApplicationSession(applicationId, sessionId)

Get Application session

Get the details of the given session. You can list the sessions with the [List Application sessions](https://docs.talon.one/management-api#tag/Customer-data/operation/getApplicationSessions) endpoint. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetApplicationSessionRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The **internal** ID of the session. You can get the ID with the [List Application sessions](https://docs.talon.one/management-api#tag/Customer-data/operation/getApplicationSessions) endpoint. 
    sessionId: 789,
  } satisfies GetApplicationSessionRequest;

  try {
    const data = await api.getApplicationSession(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **sessionId** | `number` | The **internal** ID of the session. You can get the ID with the [List Application sessions](https://docs.talon.one/management-api#tag/Customer-data/operation/getApplicationSessions) endpoint.  | [Defaults to `undefined`] |

### Return type

[**ApplicationSession**](ApplicationSession.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getApplicationSessions

> GetApplicationSessions200Response getApplicationSessions(applicationId, pageSize, skip, sort, profile, state, createdBefore, createdAfter, coupon, referral, integrationId, storeIntegrationId)

List Application sessions

List all the sessions of the specified Application. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetApplicationSessionsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // string | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with `-`.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  (optional)
    sort: sort_example,
    // string | Profile integration ID filter for sessions. Must be exact match. (optional)
    profile: profile_example,
    // 'open' | 'closed' | 'partially_returned' | 'cancelled' | Filter by sessions with this state. Must be exact match. (optional)
    state: state_example,
    // Date | Only return events created before this date. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    createdBefore: 2013-10-20T19:20:30+01:00,
    // Date | Only return events created after this date. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    createdAfter: 2013-10-20T19:20:30+01:00,
    // string | Filter by sessions with this coupon. Must be exact match. (optional)
    coupon: coupon_example,
    // string | Filter by sessions with this referral. Must be exact match. (optional)
    referral: referral_example,
    // string | Filter by sessions with this integration ID. Must be exact match. (optional)
    integrationId: integrationId_example,
    // string | The integration ID of the store. You choose this ID when you create a store. (optional)
    storeIntegrationId: storeIntegrationId_example,
  } satisfies GetApplicationSessionsRequest;

  try {
    const data = await api.getApplicationSessions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with &#x60;-&#x60;.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  | [Optional] [Defaults to `undefined`] |
| **profile** | `string` | Profile integration ID filter for sessions. Must be exact match. | [Optional] [Defaults to `undefined`] |
| **state** | `open`, `closed`, `partially_returned`, `cancelled` | Filter by sessions with this state. Must be exact match. | [Optional] [Defaults to `undefined`] [Enum: open, closed, partially_returned, cancelled] |
| **createdBefore** | `Date` | Only return events created before this date. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **createdAfter** | `Date` | Only return events created after this date. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **coupon** | `string` | Filter by sessions with this coupon. Must be exact match. | [Optional] [Defaults to `undefined`] |
| **referral** | `string` | Filter by sessions with this referral. Must be exact match. | [Optional] [Defaults to `undefined`] |
| **integrationId** | `string` | Filter by sessions with this integration ID. Must be exact match. | [Optional] [Defaults to `undefined`] |
| **storeIntegrationId** | `string` | The integration ID of the store. You choose this ID when you create a store. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetApplicationSessions200Response**](GetApplicationSessions200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getApplications

> GetApplications200Response getApplications(pageSize, skip, sort)

List Applications

List all applications in the current account.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetApplicationsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // string | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with `-`.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  (optional)
    sort: sort_example,
  } satisfies GetApplicationsRequest;

  try {
    const data = await api.getApplications(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with &#x60;-&#x60;.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  | [Optional] [Defaults to `undefined`] |

### Return type

[**GetApplications200Response**](GetApplications200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAttribute

> Attribute getAttribute(attributeId)

Get custom attribute

Retrieve the specified custom attribute. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetAttributeRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the attribute. You can find the ID in the Campaign Manager\'s URL when you display the details of an attribute in **Account** > **Tools** > **Attributes**.
    attributeId: 789,
  } satisfies GetAttributeRequest;

  try {
    const data = await api.getAttribute(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **attributeId** | `number` | The ID of the attribute. You can find the ID in the Campaign Manager\&#39;s URL when you display the details of an attribute in **Account** &gt; **Tools** &gt; **Attributes**. | [Defaults to `undefined`] |

### Return type

[**Attribute**](Attribute.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAttributes

> GetAttributes200Response getAttributes(pageSize, skip, sort, entity, applicationIds, type, kind, search)

List custom attributes

Return all the custom attributes for the account. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetAttributesRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // string | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with `-`.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  (optional)
    sort: sort_example,
    // string | Returned attributes will be filtered by supplied entity. (optional)
    entity: entity_example,
    // string | Returned attributes will be filtered by supplied application ids (optional)
    applicationIds: applicationIds_example,
    // string | Returned attributes will be filtered by supplied type (optional)
    type: type_example,
    // 'builtin' | 'custom' | Returned attributes will be filtered by supplied kind (builtin or custom) (optional)
    kind: kind_example,
    // string | Returned attributes will be filtered by searching case insensitive through Attribute name, description and type (optional)
    search: search_example,
  } satisfies GetAttributesRequest;

  try {
    const data = await api.getAttributes(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with &#x60;-&#x60;.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  | [Optional] [Defaults to `undefined`] |
| **entity** | `string` | Returned attributes will be filtered by supplied entity. | [Optional] [Defaults to `undefined`] |
| **applicationIds** | `string` | Returned attributes will be filtered by supplied application ids | [Optional] [Defaults to `undefined`] |
| **type** | `string` | Returned attributes will be filtered by supplied type | [Optional] [Defaults to `undefined`] |
| **kind** | `builtin`, `custom` | Returned attributes will be filtered by supplied kind (builtin or custom) | [Optional] [Defaults to `undefined`] [Enum: builtin, custom] |
| **search** | `string` | Returned attributes will be filtered by searching case insensitive through Attribute name, description and type | [Optional] [Defaults to `undefined`] |

### Return type

[**GetAttributes200Response**](GetAttributes200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAudienceMemberships

> GetAudienceMemberships200Response getAudienceMemberships(audienceId, pageSize, skip, sort, profileQuery)

List audience members

Get a paginated list of the customer profiles in a given audience.  A maximum of 1000 customer profiles per page is allowed. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetAudienceMembershipsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the audience.
    audienceId: 789,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // string | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with `-`.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  (optional)
    sort: sort_example,
    // string | The filter to select a profile. (optional)
    profileQuery: profileQuery_example,
  } satisfies GetAudienceMembershipsRequest;

  try {
    const data = await api.getAudienceMemberships(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **audienceId** | `number` | The ID of the audience. | [Defaults to `undefined`] |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with &#x60;-&#x60;.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  | [Optional] [Defaults to `undefined`] |
| **profileQuery** | `string` | The filter to select a profile. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetAudienceMemberships200Response**](GetAudienceMemberships200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAudiences

> GetAudiences200Response getAudiences(pageSize, skip, sort, withTotalResultSize)

List audiences

Get all audiences created in the account. To create an audience, use [Create audience](https://docs.talon.one/integration-api#tag/Audiences/operation/createAudienceV2). 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetAudiencesRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // string | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with `-`.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  (optional)
    sort: sort_example,
    // boolean | When this flag is set, the result includes the total size of the result, across all pages. This might decrease performance on large data sets.  - When `true`: `hasMore` is true when there is a next page. `totalResultSize` is always zero. - When `false`: `hasMore` is always false. `totalResultSize` contains the total number of results for this query.  (optional)
    withTotalResultSize: true,
  } satisfies GetAudiencesRequest;

  try {
    const data = await api.getAudiences(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with &#x60;-&#x60;.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  | [Optional] [Defaults to `undefined`] |
| **withTotalResultSize** | `boolean` | When this flag is set, the result includes the total size of the result, across all pages. This might decrease performance on large data sets.  - When &#x60;true&#x60;: &#x60;hasMore&#x60; is true when there is a next page. &#x60;totalResultSize&#x60; is always zero. - When &#x60;false&#x60;: &#x60;hasMore&#x60; is always false. &#x60;totalResultSize&#x60; contains the total number of results for this query.  | [Optional] [Defaults to `undefined`] |

### Return type

[**GetAudiences200Response**](GetAudiences200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAudiencesAnalytics

> GetAudiencesAnalytics200Response getAudiencesAnalytics(audienceIds, sort)

List audience analytics

Get a list of audience IDs and their member count. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetAudiencesAnalyticsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // string | The IDs of one or more audiences, separated by commas, by which to filter results.
    audienceIds: audienceIds_example,
    // string | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with `-`.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  (optional)
    sort: sort_example,
  } satisfies GetAudiencesAnalyticsRequest;

  try {
    const data = await api.getAudiencesAnalytics(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **audienceIds** | `string` | The IDs of one or more audiences, separated by commas, by which to filter results. | [Defaults to `undefined`] |
| **sort** | `string` | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with &#x60;-&#x60;.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  | [Optional] [Defaults to `undefined`] |

### Return type

[**GetAudiencesAnalytics200Response**](GetAudiencesAnalytics200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCampaign

> Campaign getCampaign(applicationId, campaignId)

Get campaign

Retrieve the given campaign.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetCampaignRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
  } satisfies GetCampaignRequest;

  try {
    const data = await api.getCampaign(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |

### Return type

[**Campaign**](Campaign.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCampaignAnalytics

> GetCampaignAnalytics200Response getCampaignAnalytics(applicationId, campaignId, rangeStart, rangeEnd, granularity)

Get analytics of campaigns

Retrieve statistical data about the performance of the given campaign.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetCampaignAnalyticsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // Date | Only return results from after this timestamp.  **Note:** - This must be an RFC3339 timestamp string. - You can include a time component in your string, for example, `T23:59:59` to specify the end of the day. The time zone setting considered is `UTC`. If you do not include a time component, a default time value of `T00:00:00` (midnight) in `UTC` is considered. 
    rangeStart: 2013-10-20T19:20:30+01:00,
    // Date | Only return results from before this timestamp.  **Note:** - This must be an RFC3339 timestamp string. - You can include a time component in your string, for example, `T23:59:59` to specify the end of the day. The time zone setting considered is `UTC`. If you do not include a time component, a default time value of `T00:00:00` (midnight) in `UTC` is considered. 
    rangeEnd: 2013-10-20T19:20:30+01:00,
    // '1 hour' | '1 day' | '1 week' | '1 month' | '1 year' | The time interval between the results in the returned time-series. (optional)
    granularity: granularity_example,
  } satisfies GetCampaignAnalyticsRequest;

  try {
    const data = await api.getCampaignAnalytics(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **rangeStart** | `Date` | Only return results from after this timestamp.  **Note:** - This must be an RFC3339 timestamp string. - You can include a time component in your string, for example, &#x60;T23:59:59&#x60; to specify the end of the day. The time zone setting considered is &#x60;UTC&#x60;. If you do not include a time component, a default time value of &#x60;T00:00:00&#x60; (midnight) in &#x60;UTC&#x60; is considered.  | [Defaults to `undefined`] |
| **rangeEnd** | `Date` | Only return results from before this timestamp.  **Note:** - This must be an RFC3339 timestamp string. - You can include a time component in your string, for example, &#x60;T23:59:59&#x60; to specify the end of the day. The time zone setting considered is &#x60;UTC&#x60;. If you do not include a time component, a default time value of &#x60;T00:00:00&#x60; (midnight) in &#x60;UTC&#x60; is considered.  | [Defaults to `undefined`] |
| **granularity** | `1 hour`, `1 day`, `1 week`, `1 month`, `1 year` | The time interval between the results in the returned time-series. | [Optional] [Defaults to `undefined`] [Enum: 1 hour, 1 day, 1 week, 1 month, 1 year] |

### Return type

[**GetCampaignAnalytics200Response**](GetCampaignAnalytics200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCampaignByAttributes

> GetCampaigns200Response getCampaignByAttributes(applicationId, campaignSearch, pageSize, skip, sort, campaignState)

List campaigns that match the given attributes

Get a list of all the campaigns that match a set of attributes. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetCampaignByAttributesRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // CampaignSearch | body
    campaignSearch: ...,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // string | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with `-`.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  (optional)
    sort: sort_example,
    // 'enabled' | 'disabled' | 'archived' | 'scheduled' | 'running' | 'expired' | 'staged' | Filter results by the state of the campaign.  - `enabled`: Campaigns that are scheduled, running (activated), or expired. - `running`: Campaigns that are running (activated). - `disabled`: Campaigns that are disabled. - `expired`: Campaigns that are expired. - `archived`: Campaigns that are archived.  (optional)
    campaignState: campaignState_example,
  } satisfies GetCampaignByAttributesRequest;

  try {
    const data = await api.getCampaignByAttributes(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignSearch** | [CampaignSearch](CampaignSearch.md) | body | |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with &#x60;-&#x60;.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  | [Optional] [Defaults to `undefined`] |
| **campaignState** | `enabled`, `disabled`, `archived`, `scheduled`, `running`, `expired`, `staged` | Filter results by the state of the campaign.  - &#x60;enabled&#x60;: Campaigns that are scheduled, running (activated), or expired. - &#x60;running&#x60;: Campaigns that are running (activated). - &#x60;disabled&#x60;: Campaigns that are disabled. - &#x60;expired&#x60;: Campaigns that are expired. - &#x60;archived&#x60;: Campaigns that are archived.  | [Optional] [Defaults to `undefined`] [Enum: enabled, disabled, archived, scheduled, running, expired, staged] |

### Return type

[**GetCampaigns200Response**](GetCampaigns200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCampaignGroup

> CampaignGroup getCampaignGroup(campaignGroupId)

Get campaign access group

Get a campaign access group specified by its ID.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetCampaignGroupRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the campaign access group.
    campaignGroupId: 789,
  } satisfies GetCampaignGroupRequest;

  try {
    const data = await api.getCampaignGroup(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **campaignGroupId** | `number` | The ID of the campaign access group. | [Defaults to `undefined`] |

### Return type

[**CampaignGroup**](CampaignGroup.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCampaignGroups

> GetCampaignGroups200Response getCampaignGroups(pageSize, skip, sort)

List campaign access groups

List the campaign access groups in the current account.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetCampaignGroupsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // string | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with `-`.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  (optional)
    sort: sort_example,
  } satisfies GetCampaignGroupsRequest;

  try {
    const data = await api.getCampaignGroups(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with &#x60;-&#x60;.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  | [Optional] [Defaults to `undefined`] |

### Return type

[**GetCampaignGroups200Response**](GetCampaignGroups200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCampaignTemplates

> GetCampaignTemplates200Response getCampaignTemplates(pageSize, skip, sort, state, name, tags, userId)

List campaign templates

Retrieve a list of campaign templates.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetCampaignTemplatesRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // string | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with `-`.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  (optional)
    sort: sort_example,
    // 'draft' | 'enabled' | 'disabled' | Filter results by the state of the campaign template. (optional)
    state: state_example,
    // string | Filter results performing case-insensitive matching against the name of the campaign template. (optional)
    name: name_example,
    // string | Filter results performing case-insensitive matching against the tags of the campaign template. When used in conjunction with the \"name\" query parameter, a logical OR will be performed to search both tags and name for the provided values.  (optional)
    tags: tags_example,
    // number | Filter results by user ID. (optional)
    userId: 789,
  } satisfies GetCampaignTemplatesRequest;

  try {
    const data = await api.getCampaignTemplates(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with &#x60;-&#x60;.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  | [Optional] [Defaults to `undefined`] |
| **state** | `draft`, `enabled`, `disabled` | Filter results by the state of the campaign template. | [Optional] [Defaults to `undefined`] [Enum: draft, enabled, disabled] |
| **name** | `string` | Filter results performing case-insensitive matching against the name of the campaign template. | [Optional] [Defaults to `undefined`] |
| **tags** | `string` | Filter results performing case-insensitive matching against the tags of the campaign template. When used in conjunction with the \&quot;name\&quot; query parameter, a logical OR will be performed to search both tags and name for the provided values.  | [Optional] [Defaults to `undefined`] |
| **userId** | `number` | Filter results by user ID. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetCampaignTemplates200Response**](GetCampaignTemplates200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCampaigns

> GetCampaigns200Response getCampaigns(applicationId, pageSize, skip, sort, campaignState, name, tags, createdBefore, createdAfter, startBefore, startAfter, endBefore, endAfter, campaignGroupId, templateId, storeId)

List campaigns

List the campaigns of the specified application that match your filter criteria. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetCampaignsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // string | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with `-`.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  (optional)
    sort: sort_example,
    // 'enabled' | 'disabled' | 'archived' | 'scheduled' | 'running' | 'expired' | 'staged' | Filter results by the state of the campaign.  - `enabled`: Campaigns that are scheduled, running (activated), or expired. - `running`: Campaigns that are running (activated). - `disabled`: Campaigns that are disabled. - `expired`: Campaigns that are expired. - `archived`: Campaigns that are archived.  (optional)
    campaignState: campaignState_example,
    // string | Filter results performing case-insensitive matching against the name of the campaign. (optional)
    name: name_example,
    // string | Filter results performing case-insensitive matching against the tags of the campaign. When used in conjunction with the \"name\" query parameter, a logical OR will be performed to search both tags and name for the provided values  (optional)
    tags: tags_example,
    // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the campaign creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    createdBefore: 2013-10-20T19:20:30+01:00,
    // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the campaign creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    createdAfter: 2013-10-20T19:20:30+01:00,
    // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the campaign start time timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    startBefore: 2013-10-20T19:20:30+01:00,
    // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the campaign start time timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    startAfter: 2013-10-20T19:20:30+01:00,
    // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the campaign end time timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    endBefore: 2013-10-20T19:20:30+01:00,
    // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the campaign end time timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    endAfter: 2013-10-20T19:20:30+01:00,
    // number | Filter results to campaigns owned by the specified campaign access group ID. (optional)
    campaignGroupId: 789,
    // number | The ID of the campaign template this campaign was created from. (optional)
    templateId: 789,
    // number | Filter results to campaigns linked to the specified store ID. (optional)
    storeId: 789,
  } satisfies GetCampaignsRequest;

  try {
    const data = await api.getCampaigns(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with &#x60;-&#x60;.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  | [Optional] [Defaults to `undefined`] |
| **campaignState** | `enabled`, `disabled`, `archived`, `scheduled`, `running`, `expired`, `staged` | Filter results by the state of the campaign.  - &#x60;enabled&#x60;: Campaigns that are scheduled, running (activated), or expired. - &#x60;running&#x60;: Campaigns that are running (activated). - &#x60;disabled&#x60;: Campaigns that are disabled. - &#x60;expired&#x60;: Campaigns that are expired. - &#x60;archived&#x60;: Campaigns that are archived.  | [Optional] [Defaults to `undefined`] [Enum: enabled, disabled, archived, scheduled, running, expired, staged] |
| **name** | `string` | Filter results performing case-insensitive matching against the name of the campaign. | [Optional] [Defaults to `undefined`] |
| **tags** | `string` | Filter results performing case-insensitive matching against the tags of the campaign. When used in conjunction with the \&quot;name\&quot; query parameter, a logical OR will be performed to search both tags and name for the provided values  | [Optional] [Defaults to `undefined`] |
| **createdBefore** | `Date` | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the campaign creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **createdAfter** | `Date` | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the campaign creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **startBefore** | `Date` | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the campaign start time timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **startAfter** | `Date` | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the campaign start time timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **endBefore** | `Date` | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the campaign end time timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **endAfter** | `Date` | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the campaign end time timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **campaignGroupId** | `number` | Filter results to campaigns owned by the specified campaign access group ID. | [Optional] [Defaults to `undefined`] |
| **templateId** | `number` | The ID of the campaign template this campaign was created from. | [Optional] [Defaults to `undefined`] |
| **storeId** | `number` | Filter results to campaigns linked to the specified store ID. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetCampaigns200Response**](GetCampaigns200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getChanges

> GetChanges200Response getChanges(pageSize, skip, sort, applicationId, entityPath, userId, createdBefore, createdAfter, withTotalResultSize, managementKeyId, includeOld)

Get audit logs for an account

Retrieve the audit logs displayed in **Accounts &gt; Audit logs**. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetChangesRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // string | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with `-`.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  (optional)
    sort: sort_example,
    // number | Filter results by Application ID. (optional)
    applicationId: 8.14,
    // string | Filter results on a case insensitive matching of the url path of the entity (optional)
    entityPath: entityPath_example,
    // number | Filter results by user ID. (optional)
    userId: 789,
    // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the change creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    createdBefore: 2013-10-20T19:20:30+01:00,
    // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the change creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    createdAfter: 2013-10-20T19:20:30+01:00,
    // boolean | When this flag is set, the result includes the total size of the result, across all pages. This might decrease performance on large data sets.  - When `true`: `hasMore` is true when there is a next page. `totalResultSize` is always zero. - When `false`: `hasMore` is always false. `totalResultSize` contains the total number of results for this query.  (optional)
    withTotalResultSize: true,
    // number | Filter results that match the given management key ID. (optional)
    managementKeyId: 789,
    // boolean | When this flag is set to false, the state without the change will not be returned. The default value is true. (optional)
    includeOld: true,
  } satisfies GetChangesRequest;

  try {
    const data = await api.getChanges(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with &#x60;-&#x60;.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  | [Optional] [Defaults to `undefined`] |
| **applicationId** | `number` | Filter results by Application ID. | [Optional] [Defaults to `undefined`] |
| **entityPath** | `string` | Filter results on a case insensitive matching of the url path of the entity | [Optional] [Defaults to `undefined`] |
| **userId** | `number` | Filter results by user ID. | [Optional] [Defaults to `undefined`] |
| **createdBefore** | `Date` | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the change creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **createdAfter** | `Date` | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the change creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **withTotalResultSize** | `boolean` | When this flag is set, the result includes the total size of the result, across all pages. This might decrease performance on large data sets.  - When &#x60;true&#x60;: &#x60;hasMore&#x60; is true when there is a next page. &#x60;totalResultSize&#x60; is always zero. - When &#x60;false&#x60;: &#x60;hasMore&#x60; is always false. &#x60;totalResultSize&#x60; contains the total number of results for this query.  | [Optional] [Defaults to `undefined`] |
| **managementKeyId** | `number` | Filter results that match the given management key ID. | [Optional] [Defaults to `undefined`] |
| **includeOld** | `boolean` | When this flag is set to false, the state without the change will not be returned. The default value is true. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetChanges200Response**](GetChanges200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCollection

> Collection getCollection(applicationId, campaignId, collectionId)

Get campaign-level collection

Retrieve a given campaign-level collection.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetCollectionRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // number | The ID of the collection. You can get it with the [List collections in Application](#operation/listCollectionsInApplication) endpoint.
    collectionId: 789,
  } satisfies GetCollectionRequest;

  try {
    const data = await api.getCollection(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **collectionId** | `number` | The ID of the collection. You can get it with the [List collections in Application](#operation/listCollectionsInApplication) endpoint. | [Defaults to `undefined`] |

### Return type

[**Collection**](Collection.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCollectionItems

> GetCollectionItems200Response getCollectionItems(collectionId, pageSize, skip)

Get collection items

Retrieve items from a given collection.  You can retrieve items from both account-level collections and campaign-level collections using this endpoint. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetCollectionItemsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the collection. You can get it with the [List collections in account](#operation/listAccountCollections) endpoint.
    collectionId: 789,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
  } satisfies GetCollectionItemsRequest;

  try {
    const data = await api.getCollectionItems(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **collectionId** | `number` | The ID of the collection. You can get it with the [List collections in account](#operation/listAccountCollections) endpoint. | [Defaults to `undefined`] |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetCollectionItems200Response**](GetCollectionItems200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCouponsWithoutTotalCount

> GetCouponsWithoutTotalCount200Response getCouponsWithoutTotalCount(applicationId, campaignId, pageSize, skip, sort, value, createdBefore, createdAfter, valid, usable, redeemed, referralId, recipientIntegrationId, batchId, exactMatch, expiresBefore, expiresAfter, startsBefore, startsAfter, valuesOnly)

List coupons

List all the coupons matching the specified criteria. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetCouponsWithoutTotalCountRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // string | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with `-`.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  (optional)
    sort: sort_example,
    // string | Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters. (optional)
    value: value_example,
    // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    createdBefore: 2013-10-20T19:20:30+01:00,
    // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    createdAfter: 2013-10-20T19:20:30+01:00,
    // 'expired' | 'validNow' | 'validFuture' | Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiration date is set and in the past. The second matches coupons in which start date is null or in the past and expiration date is null or in the future, the third matches coupons in which start date is set and in the future.  (optional)
    valid: valid_example,
    // 'true' | 'false' | Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`.  (optional)
    usable: usable_example,
    // 'true' | 'false' | - `true`: only coupons where `usageCounter > 0` will be returned. - `false`: only coupons where `usageCounter = 0` will be returned. - This field cannot be used in conjunction with the `usable` query parameter.  (optional)
    redeemed: redeemed_example,
    // number | Filter the results by matching them with the ID of a referral. This filter shows the coupons created by redeeming a referral code. (optional)
    referralId: 789,
    // string | Filter results by match with a profile ID specified in the coupon\'s RecipientIntegrationId field. (optional)
    recipientIntegrationId: recipientIntegrationId_example,
    // string | Filter results by batches of coupons (optional)
    batchId: batchId_example,
    // boolean | Filter results to an exact case-insensitive matching against the coupon code. (optional)
    exactMatch: true,
    // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon expiration date timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    expiresBefore: 2013-10-20T19:20:30+01:00,
    // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon expiration date timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    expiresAfter: 2013-10-20T19:20:30+01:00,
    // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon start date timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    startsBefore: 2013-10-20T19:20:30+01:00,
    // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon start date timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    startsAfter: 2013-10-20T19:20:30+01:00,
    // boolean | Filter results to only return the coupon codes (`value` column) without the associated coupon data. (optional)
    valuesOnly: true,
  } satisfies GetCouponsWithoutTotalCountRequest;

  try {
    const data = await api.getCouponsWithoutTotalCount(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with &#x60;-&#x60;.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  | [Optional] [Defaults to `undefined`] |
| **value** | `string` | Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters. | [Optional] [Defaults to `undefined`] |
| **createdBefore** | `Date` | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **createdAfter** | `Date` | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **valid** | `expired`, `validNow`, `validFuture` | Either \&quot;expired\&quot;, \&quot;validNow\&quot;, or \&quot;validFuture\&quot;. The first option matches coupons in which the expiration date is set and in the past. The second matches coupons in which start date is null or in the past and expiration date is null or in the future, the third matches coupons in which start date is set and in the future.  | [Optional] [Defaults to `undefined`] [Enum: expired, validNow, validFuture] |
| **usable** | `true`, `false` | Either \&quot;true\&quot; or \&quot;false\&quot;. If \&quot;true\&quot;, only coupons where &#x60;usageCounter &lt; usageLimit&#x60; will be returned, \&quot;false\&quot; will return only coupons where &#x60;usageCounter &gt;&#x3D; usageLimit&#x60;.  | [Optional] [Defaults to `undefined`] [Enum: true, false] |
| **redeemed** | `true`, `false` | - &#x60;true&#x60;: only coupons where &#x60;usageCounter &gt; 0&#x60; will be returned. - &#x60;false&#x60;: only coupons where &#x60;usageCounter &#x3D; 0&#x60; will be returned. - This field cannot be used in conjunction with the &#x60;usable&#x60; query parameter.  | [Optional] [Defaults to `undefined`] [Enum: true, false] |
| **referralId** | `number` | Filter the results by matching them with the ID of a referral. This filter shows the coupons created by redeeming a referral code. | [Optional] [Defaults to `undefined`] |
| **recipientIntegrationId** | `string` | Filter results by match with a profile ID specified in the coupon\&#39;s RecipientIntegrationId field. | [Optional] [Defaults to `undefined`] |
| **batchId** | `string` | Filter results by batches of coupons | [Optional] [Defaults to `undefined`] |
| **exactMatch** | `boolean` | Filter results to an exact case-insensitive matching against the coupon code. | [Optional] [Defaults to `false`] |
| **expiresBefore** | `Date` | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon expiration date timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **expiresAfter** | `Date` | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon expiration date timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **startsBefore** | `Date` | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon start date timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **startsAfter** | `Date` | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon start date timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **valuesOnly** | `boolean` | Filter results to only return the coupon codes (&#x60;value&#x60; column) without the associated coupon data. | [Optional] [Defaults to `false`] |

### Return type

[**GetCouponsWithoutTotalCount200Response**](GetCouponsWithoutTotalCount200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCustomerActivityReport

> CustomerActivityReport getCustomerActivityReport(rangeStart, rangeEnd, applicationId, customerId, pageSize, skip)

Get customer\&#39;s activity report

Fetch the summary report of a given customer in the given application, in a time range.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetCustomerActivityReportRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // Date | Only return results from after this timestamp.  **Note:** - This must be an RFC3339 timestamp string. - You can include a time component in your string, for example, `T23:59:59` to specify the end of the day. The time zone setting considered is `UTC`. If you do not include a time component, a default time value of `T00:00:00` (midnight) in `UTC` is considered. 
    rangeStart: 2013-10-20T19:20:30+01:00,
    // Date | Only return results from before this timestamp.  **Note:** - This must be an RFC3339 timestamp string. - You can include a time component in your string, for example, `T23:59:59` to specify the end of the day. The time zone setting considered is `UTC`. If you do not include a time component, a default time value of `T00:00:00` (midnight) in `UTC` is considered. 
    rangeEnd: 2013-10-20T19:20:30+01:00,
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The value of the `id` property of a customer profile. Get it with the [List Application\'s customers](https://docs.talon.one/management-api#operation/getApplicationCustomers) endpoint. 
    customerId: 789,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
  } satisfies GetCustomerActivityReportRequest;

  try {
    const data = await api.getCustomerActivityReport(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **rangeStart** | `Date` | Only return results from after this timestamp.  **Note:** - This must be an RFC3339 timestamp string. - You can include a time component in your string, for example, &#x60;T23:59:59&#x60; to specify the end of the day. The time zone setting considered is &#x60;UTC&#x60;. If you do not include a time component, a default time value of &#x60;T00:00:00&#x60; (midnight) in &#x60;UTC&#x60; is considered.  | [Defaults to `undefined`] |
| **rangeEnd** | `Date` | Only return results from before this timestamp.  **Note:** - This must be an RFC3339 timestamp string. - You can include a time component in your string, for example, &#x60;T23:59:59&#x60; to specify the end of the day. The time zone setting considered is &#x60;UTC&#x60;. If you do not include a time component, a default time value of &#x60;T00:00:00&#x60; (midnight) in &#x60;UTC&#x60; is considered.  | [Defaults to `undefined`] |
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **customerId** | `number` | The value of the &#x60;id&#x60; property of a customer profile. Get it with the [List Application\&#39;s customers](https://docs.talon.one/management-api#operation/getApplicationCustomers) endpoint.  | [Defaults to `undefined`] |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |

### Return type

[**CustomerActivityReport**](CustomerActivityReport.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCustomerActivityReportsWithoutTotalCount

> GetCustomerActivityReportsWithoutTotalCount200Response getCustomerActivityReportsWithoutTotalCount(rangeStart, rangeEnd, applicationId, pageSize, skip, sort, name, integrationId, campaignName, advocateName)

Get Activity Reports for Application Customers

Fetch summary reports for all application customers based on a time range. Instead of having the total number of results in the response, this endpoint only mentions whether there are more results. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetCustomerActivityReportsWithoutTotalCountRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // Date | Only return results from after this timestamp.  **Note:** - This must be an RFC3339 timestamp string. - You can include a time component in your string, for example, `T23:59:59` to specify the end of the day. The time zone setting considered is `UTC`. If you do not include a time component, a default time value of `T00:00:00` (midnight) in `UTC` is considered. 
    rangeStart: 2013-10-20T19:20:30+01:00,
    // Date | Only return results from before this timestamp.  **Note:** - This must be an RFC3339 timestamp string. - You can include a time component in your string, for example, `T23:59:59` to specify the end of the day. The time zone setting considered is `UTC`. If you do not include a time component, a default time value of `T00:00:00` (midnight) in `UTC` is considered. 
    rangeEnd: 2013-10-20T19:20:30+01:00,
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // string | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with `-`.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  (optional)
    sort: sort_example,
    // string | Only return reports matching the customer name. (optional)
    name: name_example,
    // string | Filter results performing an exact matching against the profile integration identifier. (optional)
    integrationId: integrationId_example,
    // string | Only return reports matching the campaign name. (optional)
    campaignName: campaignName_example,
    // string | Only return reports matching the current customer referrer name. (optional)
    advocateName: advocateName_example,
  } satisfies GetCustomerActivityReportsWithoutTotalCountRequest;

  try {
    const data = await api.getCustomerActivityReportsWithoutTotalCount(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **rangeStart** | `Date` | Only return results from after this timestamp.  **Note:** - This must be an RFC3339 timestamp string. - You can include a time component in your string, for example, &#x60;T23:59:59&#x60; to specify the end of the day. The time zone setting considered is &#x60;UTC&#x60;. If you do not include a time component, a default time value of &#x60;T00:00:00&#x60; (midnight) in &#x60;UTC&#x60; is considered.  | [Defaults to `undefined`] |
| **rangeEnd** | `Date` | Only return results from before this timestamp.  **Note:** - This must be an RFC3339 timestamp string. - You can include a time component in your string, for example, &#x60;T23:59:59&#x60; to specify the end of the day. The time zone setting considered is &#x60;UTC&#x60;. If you do not include a time component, a default time value of &#x60;T00:00:00&#x60; (midnight) in &#x60;UTC&#x60; is considered.  | [Defaults to `undefined`] |
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with &#x60;-&#x60;.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  | [Optional] [Defaults to `undefined`] |
| **name** | `string` | Only return reports matching the customer name. | [Optional] [Defaults to `undefined`] |
| **integrationId** | `string` | Filter results performing an exact matching against the profile integration identifier. | [Optional] [Defaults to `undefined`] |
| **campaignName** | `string` | Only return reports matching the campaign name. | [Optional] [Defaults to `undefined`] |
| **advocateName** | `string` | Only return reports matching the current customer referrer name. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetCustomerActivityReportsWithoutTotalCount200Response**](GetCustomerActivityReportsWithoutTotalCount200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCustomerAnalytics

> CustomerAnalytics getCustomerAnalytics(applicationId, customerId, pageSize, skip, sort)

Get customer\&#39;s analytics report

Fetch analytics for a given customer in the given application.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetCustomerAnalyticsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The value of the `id` property of a customer profile. Get it with the [List Application\'s customers](https://docs.talon.one/management-api#operation/getApplicationCustomers) endpoint. 
    customerId: 789,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // string | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with `-`.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  (optional)
    sort: sort_example,
  } satisfies GetCustomerAnalyticsRequest;

  try {
    const data = await api.getCustomerAnalytics(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **customerId** | `number` | The value of the &#x60;id&#x60; property of a customer profile. Get it with the [List Application\&#39;s customers](https://docs.talon.one/management-api#operation/getApplicationCustomers) endpoint.  | [Defaults to `undefined`] |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with &#x60;-&#x60;.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  | [Optional] [Defaults to `undefined`] |

### Return type

[**CustomerAnalytics**](CustomerAnalytics.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCustomerProfile

> CustomerProfile getCustomerProfile(customerId)

Get customer profile

Return the details of the specified customer profile.  &lt;div class&#x3D;\&quot;redoc-section\&quot;&gt;   &lt;p class&#x3D;\&quot;title\&quot;&gt;Performance tips&lt;/p&gt;    You can retrieve the same information via the Integration API, which can save you extra API requests. consider these options:    - Request the customer profile to be part of the response content using     [Update Customer Session](https://docs.talon.one/integration-api#tag/Customer-sessions/operation/updateCustomerSessionV2).   - Send an empty update with the [Update Customer Profile](https://docs.talon.one/integration-api#tag/Customer-profiles/operation/updateCustomerProfileV2) endpoint with &#x60;runRuleEngine&#x3D;false&#x60;. &lt;/div&gt; 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetCustomerProfileRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The value of the `id` property of a customer profile. Get it with the [List Application\'s customers](https://docs.talon.one/management-api#operation/getApplicationCustomers) endpoint. 
    customerId: 789,
  } satisfies GetCustomerProfileRequest;

  try {
    const data = await api.getCustomerProfile(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **customerId** | `number` | The value of the &#x60;id&#x60; property of a customer profile. Get it with the [List Application\&#39;s customers](https://docs.talon.one/management-api#operation/getApplicationCustomers) endpoint.  | [Defaults to `undefined`] |

### Return type

[**CustomerProfile**](CustomerProfile.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCustomerProfileAchievementProgress

> GetCustomerProfileAchievementProgress200Response getCustomerProfileAchievementProgress(applicationId, integrationId, pageSize, skip, achievementId, title)

List customer achievements

For the given customer profile, list all the achievements that match your filter criteria. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetCustomerProfileAchievementProgressRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // string | The integration identifier for this customer profile. Must be: - Unique within the deployment. - Stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  Once set, you cannot update this identifier. 
    integrationId: integrationId_example,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // number | The ID of the achievement. You can get this ID with the [List achievement](https://docs.talon.one/management-api#tag/Achievements/operation/listAchievements) endpoint. (optional)
    achievementId: 789,
    // string | Filter results by the `title` of an achievement. (optional)
    title: title_example,
  } satisfies GetCustomerProfileAchievementProgressRequest;

  try {
    const data = await api.getCustomerProfileAchievementProgress(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **integrationId** | `string` | The integration identifier for this customer profile. Must be: - Unique within the deployment. - Stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  Once set, you cannot update this identifier.  | [Defaults to `undefined`] |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `50`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **achievementId** | `number` | The ID of the achievement. You can get this ID with the [List achievement](https://docs.talon.one/management-api#tag/Achievements/operation/listAchievements) endpoint. | [Optional] [Defaults to `undefined`] |
| **title** | `string` | Filter results by the &#x60;title&#x60; of an achievement. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetCustomerProfileAchievementProgress200Response**](GetCustomerProfileAchievementProgress200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCustomerProfiles

> GetCustomerProfiles200Response getCustomerProfiles(pageSize, skip, sandbox)

List customer profiles

List all customer profiles.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetCustomerProfilesRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // boolean | Indicates whether you are pointing to a sandbox or live customer. (optional)
    sandbox: true,
  } satisfies GetCustomerProfilesRequest;

  try {
    const data = await api.getCustomerProfiles(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **sandbox** | `boolean` | Indicates whether you are pointing to a sandbox or live customer. | [Optional] [Defaults to `false`] |

### Return type

[**GetCustomerProfiles200Response**](GetCustomerProfiles200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCustomersByAttributes

> GetCustomersByAttributes200Response getCustomersByAttributes(customerProfileSearchQuery, pageSize, skip, sandbox)

List customer profiles matching the given attributes

Get a list of the customer profiles matching the provided criteria.  The match is successful if all the attributes of the request are found in a profile, even if the profile has more attributes that are not present on the request. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetCustomersByAttributesRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // CustomerProfileSearchQuery | body
    customerProfileSearchQuery: ...,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // boolean | Indicates whether you are pointing to a sandbox or live customer. (optional)
    sandbox: true,
  } satisfies GetCustomersByAttributesRequest;

  try {
    const data = await api.getCustomersByAttributes(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **customerProfileSearchQuery** | [CustomerProfileSearchQuery](CustomerProfileSearchQuery.md) | body | |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **sandbox** | `boolean` | Indicates whether you are pointing to a sandbox or live customer. | [Optional] [Defaults to `false`] |

### Return type

[**GetCustomersByAttributes200Response**](GetCustomersByAttributes200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDashboardStatistics

> GetDashboardStatistics200Response getDashboardStatistics(loyaltyProgramId, rangeStart, rangeEnd, subledgerId)

Get statistics for loyalty dashboard

Retrieve the statistics displayed on the specified loyalty program\&#39;s dashboard, such as the total active points, pending points, spent points, and expired points.  **Important:** The returned data does not include the current day. All statistics are updated daily at 11:59 PM in the loyalty program time zone. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetDashboardStatisticsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | Identifier of the loyalty program. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
    loyaltyProgramId: 789,
    // Date | Only return results from after this timestamp.  **Note:** - This must be an RFC3339 timestamp string. - You can include a time component in your string, for example, `T23:59:59` to specify the end of the day. The time zone setting considered is `UTC`. If you do not include a time component, a default time value of `T00:00:00` (midnight) in `UTC` is considered. 
    rangeStart: 2013-10-20T19:20:30+01:00,
    // Date | Only return results from before this timestamp.  **Note:** - This must be an RFC3339 timestamp string. - You can include a time component in your string, for example, `T23:59:59` to specify the end of the day. The time zone setting considered is `UTC`. If you do not include a time component, a default time value of `T00:00:00` (midnight) in `UTC` is considered. 
    rangeEnd: 2013-10-20T19:20:30+01:00,
    // string | The ID of the subledger by which we filter the data. (optional)
    subledgerId: subledgerId_example,
  } satisfies GetDashboardStatisticsRequest;

  try {
    const data = await api.getDashboardStatistics(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `number` | Identifier of the loyalty program. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | [Defaults to `undefined`] |
| **rangeStart** | `Date` | Only return results from after this timestamp.  **Note:** - This must be an RFC3339 timestamp string. - You can include a time component in your string, for example, &#x60;T23:59:59&#x60; to specify the end of the day. The time zone setting considered is &#x60;UTC&#x60;. If you do not include a time component, a default time value of &#x60;T00:00:00&#x60; (midnight) in &#x60;UTC&#x60; is considered.  | [Defaults to `undefined`] |
| **rangeEnd** | `Date` | Only return results from before this timestamp.  **Note:** - This must be an RFC3339 timestamp string. - You can include a time component in your string, for example, &#x60;T23:59:59&#x60; to specify the end of the day. The time zone setting considered is &#x60;UTC&#x60;. If you do not include a time component, a default time value of &#x60;T00:00:00&#x60; (midnight) in &#x60;UTC&#x60; is considered.  | [Defaults to `undefined`] |
| **subledgerId** | `string` | The ID of the subledger by which we filter the data. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetDashboardStatistics200Response**](GetDashboardStatistics200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getEventTypes

> GetEventTypes200Response getEventTypes(name, includeOldVersions, pageSize, skip, sort)

List event types

Fetch all event type definitions for your account. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetEventTypesRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // string | Filter results to event types with the given name. This parameter implies `includeOldVersions`. (optional)
    name: name_example,
    // boolean | Include all versions of every event type. (optional)
    includeOldVersions: true,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // string | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with `-`.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  (optional)
    sort: sort_example,
  } satisfies GetEventTypesRequest;

  try {
    const data = await api.getEventTypes(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **name** | `string` | Filter results to event types with the given name. This parameter implies &#x60;includeOldVersions&#x60;. | [Optional] [Defaults to `undefined`] |
| **includeOldVersions** | `boolean` | Include all versions of every event type. | [Optional] [Defaults to `false`] |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with &#x60;-&#x60;.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  | [Optional] [Defaults to `undefined`] |

### Return type

[**GetEventTypes200Response**](GetEventTypes200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getExports

> GetExports200Response getExports(pageSize, skip, applicationId, campaignId, entity)

Get exports

List all past exports 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetExportsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // number | Filter results by Application ID. (optional)
    applicationId: 8.14,
    // number | Filter by the campaign ID on which the limit counters are used. (optional)
    campaignId: 789,
    // 'Coupon' | 'Referral' | 'Effect' | 'CustomerSession' | 'LoyaltyLedger' | 'LoyaltyLedgerLog' | 'Collection' | 'AudienceMembership' | The name of the entity type that was exported. (optional)
    entity: entity_example,
  } satisfies GetExportsRequest;

  try {
    const data = await api.getExports(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **applicationId** | `number` | Filter results by Application ID. | [Optional] [Defaults to `undefined`] |
| **campaignId** | `number` | Filter by the campaign ID on which the limit counters are used. | [Optional] [Defaults to `undefined`] |
| **entity** | `Coupon`, `Referral`, `Effect`, `CustomerSession`, `LoyaltyLedger`, `LoyaltyLedgerLog`, `Collection`, `AudienceMembership` | The name of the entity type that was exported. | [Optional] [Defaults to `undefined`] [Enum: Coupon, Referral, Effect, CustomerSession, LoyaltyLedger, LoyaltyLedgerLog, Collection, AudienceMembership] |

### Return type

[**GetExports200Response**](GetExports200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLoyaltyCard

> LoyaltyCard getLoyaltyCard(loyaltyProgramId, loyaltyCardId)

Get loyalty card

Get the given loyalty card.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetLoyaltyCardRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
    loyaltyProgramId: 789,
    // string | Identifier of the loyalty card. You can get the identifier with the [List loyalty cards](https://docs.talon.one/management-api#tag/Loyalty-cards/operation/getLoyaltyCards) endpoint. 
    loyaltyCardId: loyaltyCardId_example,
  } satisfies GetLoyaltyCardRequest;

  try {
    const data = await api.getLoyaltyCard(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `number` | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | [Defaults to `undefined`] |
| **loyaltyCardId** | `string` | Identifier of the loyalty card. You can get the identifier with the [List loyalty cards](https://docs.talon.one/management-api#tag/Loyalty-cards/operation/getLoyaltyCards) endpoint.  | [Defaults to `undefined`] |

### Return type

[**LoyaltyCard**](LoyaltyCard.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLoyaltyCardTransactionLogs

> GetLoyaltyCardTransactionLogs200Response getLoyaltyCardTransactionLogs(loyaltyProgramId, loyaltyCardId, startDate, endDate, pageSize, skip, subledgerId, customerSessionIDs, transactionUUIDs)

List card\&#39;s transactions

Retrieve the transaction logs for the given [loyalty card](https://docs.talon.one/docs/product/loyalty-programs/card-based/card-based-overview) within the specified [card-based loyalty program](https://docs.talon.one/docs/product/loyalty-programs/overview#loyalty-program-types) with filtering options applied. If no filtering options are applied, the last 50 loyalty transactions for the given loyalty card are returned. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetLoyaltyCardTransactionLogsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
    loyaltyProgramId: 789,
    // string | Identifier of the loyalty card. You can get the identifier with the [List loyalty cards](https://docs.talon.one/management-api#tag/Loyalty-cards/operation/getLoyaltyCards) endpoint. 
    loyaltyCardId: loyaltyCardId_example,
    // Date | Date and time from which results are returned. Results are filtered by transaction creation date.  **Note:**  - It must be an RFC3339 timestamp string. - You can include a time component in your string, for example, `T23:59:59` to specify the end of the day. The time zone setting considered is `UTC`. If you do not include a time component, a default time value of `T00:00:00` (midnight) in `UTC` is considered.  (optional)
    startDate: 2013-10-20T19:20:30+01:00,
    // Date | Date and time by which results are returned. Results are filtered by transaction creation date.  **Note:**  - It must be an RFC3339 timestamp string. - You can include a time component in your string, for example, `T23:59:59` to specify the end of the day. The time zone setting considered is `UTC`. If you do not include a time component, a default time value of `T00:00:00` (midnight) in `UTC` is considered.  (optional)
    endDate: 2013-10-20T19:20:30+01:00,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // string | The ID of the subledger by which we filter the data. (optional)
    subledgerId: subledgerId_example,
    // Array<string> | Filter the results by a list of customer session IDs.   To include multiple IDs, repeat the parameter for each one, for example,  `?customerSessionIDs=id1&customerSessionIDs=id2`.  The response contains only data associated with the specified sessions.  (optional)
    customerSessionIDs: ...,
    // Array<string> | Filter the results by a list of transaction UUIDs.  To include multiple IDs, repeat the parameter for each one, for example,  `?transactionUUIDs=uuid1&transactionUUIDs=uuid2`.  The response contains only data associated with the specified transactions.  (optional)
    transactionUUIDs: ...,
  } satisfies GetLoyaltyCardTransactionLogsRequest;

  try {
    const data = await api.getLoyaltyCardTransactionLogs(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `number` | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | [Defaults to `undefined`] |
| **loyaltyCardId** | `string` | Identifier of the loyalty card. You can get the identifier with the [List loyalty cards](https://docs.talon.one/management-api#tag/Loyalty-cards/operation/getLoyaltyCards) endpoint.  | [Defaults to `undefined`] |
| **startDate** | `Date` | Date and time from which results are returned. Results are filtered by transaction creation date.  **Note:**  - It must be an RFC3339 timestamp string. - You can include a time component in your string, for example, &#x60;T23:59:59&#x60; to specify the end of the day. The time zone setting considered is &#x60;UTC&#x60;. If you do not include a time component, a default time value of &#x60;T00:00:00&#x60; (midnight) in &#x60;UTC&#x60; is considered.  | [Optional] [Defaults to `undefined`] |
| **endDate** | `Date` | Date and time by which results are returned. Results are filtered by transaction creation date.  **Note:**  - It must be an RFC3339 timestamp string. - You can include a time component in your string, for example, &#x60;T23:59:59&#x60; to specify the end of the day. The time zone setting considered is &#x60;UTC&#x60;. If you do not include a time component, a default time value of &#x60;T00:00:00&#x60; (midnight) in &#x60;UTC&#x60; is considered.  | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **subledgerId** | `string` | The ID of the subledger by which we filter the data. | [Optional] [Defaults to `undefined`] |
| **customerSessionIDs** | `Array<string>` | Filter the results by a list of customer session IDs.   To include multiple IDs, repeat the parameter for each one, for example,  &#x60;?customerSessionIDs&#x3D;id1&amp;customerSessionIDs&#x3D;id2&#x60;.  The response contains only data associated with the specified sessions.  | [Optional] |
| **transactionUUIDs** | `Array<string>` | Filter the results by a list of transaction UUIDs.  To include multiple IDs, repeat the parameter for each one, for example,  &#x60;?transactionUUIDs&#x3D;uuid1&amp;transactionUUIDs&#x3D;uuid2&#x60;.  The response contains only data associated with the specified transactions.  | [Optional] |

### Return type

[**GetLoyaltyCardTransactionLogs200Response**](GetLoyaltyCardTransactionLogs200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLoyaltyCards

> GetLoyaltyCards200Response getLoyaltyCards(loyaltyProgramId, pageSize, skip, sort, identifier, profileId, batchId)

List loyalty cards

For the given card-based loyalty program, list the loyalty cards that match your filter criteria. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetLoyaltyCardsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
    loyaltyProgramId: 789,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // string | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with `-`.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  (optional)
    sort: sort_example,
    // string | The card code by which to filter loyalty cards in the response. (optional)
    identifier: identifier_example,
    // number | Filter results by customer profile ID. (optional)
    profileId: 789,
    // string | Filter results by loyalty card batch ID. (optional)
    batchId: batchId_example,
  } satisfies GetLoyaltyCardsRequest;

  try {
    const data = await api.getLoyaltyCards(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `number` | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | [Defaults to `undefined`] |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with &#x60;-&#x60;.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  | [Optional] [Defaults to `undefined`] |
| **identifier** | `string` | The card code by which to filter loyalty cards in the response. | [Optional] [Defaults to `undefined`] |
| **profileId** | `number` | Filter results by customer profile ID. | [Optional] [Defaults to `undefined`] |
| **batchId** | `string` | Filter results by loyalty card batch ID. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetLoyaltyCards200Response**](GetLoyaltyCards200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLoyaltyLedgerBalances

> LoyaltyBalancesWithTiers getLoyaltyLedgerBalances(loyaltyProgramId, integrationId, endDate, subledgerId, includeTiers, includeProjectedTier)

Get customer\&#39;s loyalty balances

Retrieve loyalty ledger balances for the given Integration ID in the specified loyalty program. You can filter balances by date and subledger ID, and include tier-related information in the response.  **Note**: If no filtering options are applied, you retrieve all loyalty balances on the current date for the given integration ID.  Loyalty balances are calculated when Talon.One receives your request using the points stored in our database, so retrieving a large number of balances at once can impact performance.  For more information, see: - [Managing card-based loyalty program data](https://docs.talon.one/docs/product/loyalty-programs/card-based/managing-loyalty-cards) - [Managing profile-based loyalty program data](https://docs.talon.one/docs/product/loyalty-programs/profile-based/managing-pb-lp-data) 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetLoyaltyLedgerBalancesRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | Identifier of the profile-based loyalty program. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
    loyaltyProgramId: 789,
    // string | The integration identifier for this customer profile. Must be: - Unique within the deployment. - Stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  Once set, you cannot update this identifier. 
    integrationId: integrationId_example,
    // Date | Used to return expired, active, and pending loyalty balances before this timestamp. You can enter any past, present, or future timestamp value.  **Note:**  - It must be an RFC3339 timestamp string. - You can include a time component in your string, for example, `T23:59:59` to specify the end of the day. The time zone setting considered is `UTC`. If you do not include a time component, a default time value of `T00:00:00` (midnight) in `UTC` is considered.  (optional)
    endDate: 2013-10-20T19:20:30+01:00,
    // string | The ID of the subledger used to filter the data. Leave this value empty (\"\") to query the main ledger. (optional)
    subledgerId: subledgerId_example,
    // boolean | Indicates whether tier information is included in the response.  When set to `true`, the response includes information about the current tier and the number of points required to move to next tier.  (optional)
    includeTiers: true,
    // boolean | Indicates whether the customer\'s projected tier information is included in the response.  When set to `true`, the response includes information about the customer\'s active points and the name of the projected tier.  **Note** We recommend filtering by `subledgerId` for better performance.  (optional)
    includeProjectedTier: true,
  } satisfies GetLoyaltyLedgerBalancesRequest;

  try {
    const data = await api.getLoyaltyLedgerBalances(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `number` | Identifier of the profile-based loyalty program. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | [Defaults to `undefined`] |
| **integrationId** | `string` | The integration identifier for this customer profile. Must be: - Unique within the deployment. - Stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  Once set, you cannot update this identifier.  | [Defaults to `undefined`] |
| **endDate** | `Date` | Used to return expired, active, and pending loyalty balances before this timestamp. You can enter any past, present, or future timestamp value.  **Note:**  - It must be an RFC3339 timestamp string. - You can include a time component in your string, for example, &#x60;T23:59:59&#x60; to specify the end of the day. The time zone setting considered is &#x60;UTC&#x60;. If you do not include a time component, a default time value of &#x60;T00:00:00&#x60; (midnight) in &#x60;UTC&#x60; is considered.  | [Optional] [Defaults to `undefined`] |
| **subledgerId** | `string` | The ID of the subledger used to filter the data. Leave this value empty (\&quot;\&quot;) to query the main ledger. | [Optional] [Defaults to `undefined`] |
| **includeTiers** | `boolean` | Indicates whether tier information is included in the response.  When set to &#x60;true&#x60;, the response includes information about the current tier and the number of points required to move to next tier.  | [Optional] [Defaults to `false`] |
| **includeProjectedTier** | `boolean` | Indicates whether the customer\&#39;s projected tier information is included in the response.  When set to &#x60;true&#x60;, the response includes information about the customer\&#39;s active points and the name of the projected tier.  **Note** We recommend filtering by &#x60;subledgerId&#x60; for better performance.  | [Optional] [Defaults to `false`] |

### Return type

[**LoyaltyBalancesWithTiers**](LoyaltyBalancesWithTiers.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLoyaltyPoints

> LoyaltyLedger getLoyaltyPoints(loyaltyProgramId, integrationId)

Get customer\&#39;s full loyalty ledger

Get the loyalty ledger for this profile integration ID.  To get the &#x60;integrationId&#x60; of the profile from a &#x60;sessionId&#x60;, use the [Update customer session](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint.  **Important:** To get loyalty transaction logs for a given Integration ID in a loyalty program, we recommend using the Integration API\&#39;s [Get customer\&#39;s loyalty logs](https://docs.talon.one/integration-api#tag/Loyalty/operation/getLoyaltyProgramProfileTransactions). 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetLoyaltyPointsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // string | The identifier for the loyalty program.
    loyaltyProgramId: loyaltyProgramId_example,
    // string | The integration identifier for this customer profile. Must be: - Unique within the deployment. - Stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  Once set, you cannot update this identifier. 
    integrationId: integrationId_example,
  } satisfies GetLoyaltyPointsRequest;

  try {
    const data = await api.getLoyaltyPoints(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `string` | The identifier for the loyalty program. | [Defaults to `undefined`] |
| **integrationId** | `string` | The integration identifier for this customer profile. Must be: - Unique within the deployment. - Stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  Once set, you cannot update this identifier.  | [Defaults to `undefined`] |

### Return type

[**LoyaltyLedger**](LoyaltyLedger.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLoyaltyProgram

> LoyaltyProgram getLoyaltyProgram(loyaltyProgramId)

Get loyalty program

Get the specified [loyalty program](https://docs.talon.one/docs/product/loyalty-programs/overview). To list all loyalty programs in your Application, use [List loyalty programs](#operation/getLoyaltyPrograms).  To list the loyalty programs that a customer profile is part of, use the [List customer data](https://docs.talon.one/integration-api#tag/Customer-profiles/operation/getCustomerInventory) 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetLoyaltyProgramRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | Identifier of the loyalty program. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
    loyaltyProgramId: 789,
  } satisfies GetLoyaltyProgramRequest;

  try {
    const data = await api.getLoyaltyProgram(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `number` | Identifier of the loyalty program. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | [Defaults to `undefined`] |

### Return type

[**LoyaltyProgram**](LoyaltyProgram.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLoyaltyProgramProfileLedgerTransactions

> GetLoyaltyProgramProfileTransactions200Response getLoyaltyProgramProfileLedgerTransactions(loyaltyProgramId, integrationId, customerSessionIDs, transactionUUIDs, subledgerId, loyaltyTransactionType, startDate, endDate, pageSize, skip, awaitsActivation)

List customer\&#39;s loyalty transactions

Retrieve paginated results of loyalty transaction logs for the given Integration ID in the specified loyalty program.  You can filter transactions by date or by ledger (subledger or main ledger). If no filters are applied, the last 50 loyalty transactions for the given integration ID are returned.  **Note:** To retrieve all loyalty program transaction logs in a given loyalty program, use the [List loyalty program transactions](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyProgramTransactions) endpoint. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetLoyaltyProgramProfileLedgerTransactionsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | Identifier of the profile-based loyalty program. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
    loyaltyProgramId: 789,
    // string | The integration identifier for this customer profile. Must be: - Unique within the deployment. - Stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  Once set, you cannot update this identifier. 
    integrationId: integrationId_example,
    // Array<string> | Filter the results by a list of customer session IDs.   To include multiple IDs, repeat the parameter for each one, for example,  `?customerSessionIDs=id1&customerSessionIDs=id2`.  The response contains only data associated with the specified sessions.  (optional)
    customerSessionIDs: ...,
    // Array<string> | Filter the results by a list of transaction UUIDs.  To include multiple IDs, repeat the parameter for each one, for example,  `?transactionUUIDs=uuid1&transactionUUIDs=uuid2`.  The response contains only data associated with the specified transactions.  (optional)
    transactionUUIDs: ...,
    // string | The ID of the subledger used to filter the data. Leave this value empty (\"\") to query the main ledger. (optional)
    subledgerId: subledgerId_example,
    // 'manual' | 'session' | 'import' | Filter results by loyalty transaction type: - `manual`: Loyalty transaction that was done manually. - `session`: Loyalty transaction that resulted from a customer session. - `import`: Loyalty transaction that was imported from a CSV file.  (optional)
    loyaltyTransactionType: loyaltyTransactionType_example,
    // Date | Date and time from which results are returned. Results are filtered by transaction creation date.  **Note:**  - It must be an RFC3339 timestamp string. - You can include a time component in your string, for example, `T23:59:59` to specify the end of the day. The time zone setting considered is `UTC`. If you do not include a time component, a default time value of `T00:00:00` (midnight) in `UTC` is considered.  (optional)
    startDate: 2013-10-20T19:20:30+01:00,
    // Date | Date and time by which results are returned. Results are filtered by transaction creation date.  **Note:**  - It must be an RFC3339 timestamp string. - You can include a time component in your string, for example, `T23:59:59` to specify the end of the day. The time zone setting considered is `UTC`. If you do not include a time component, a default time value of `T00:00:00` (midnight) in `UTC` is considered.  (optional)
    endDate: 2013-10-20T19:20:30+01:00,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // boolean | If `true`: Filters results to include only point transactions that have action-based activation and have not expired.  If `false`: Returns a `400` response.  (optional)
    awaitsActivation: true,
  } satisfies GetLoyaltyProgramProfileLedgerTransactionsRequest;

  try {
    const data = await api.getLoyaltyProgramProfileLedgerTransactions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `number` | Identifier of the profile-based loyalty program. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | [Defaults to `undefined`] |
| **integrationId** | `string` | The integration identifier for this customer profile. Must be: - Unique within the deployment. - Stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  Once set, you cannot update this identifier.  | [Defaults to `undefined`] |
| **customerSessionIDs** | `Array<string>` | Filter the results by a list of customer session IDs.   To include multiple IDs, repeat the parameter for each one, for example,  &#x60;?customerSessionIDs&#x3D;id1&amp;customerSessionIDs&#x3D;id2&#x60;.  The response contains only data associated with the specified sessions.  | [Optional] |
| **transactionUUIDs** | `Array<string>` | Filter the results by a list of transaction UUIDs.  To include multiple IDs, repeat the parameter for each one, for example,  &#x60;?transactionUUIDs&#x3D;uuid1&amp;transactionUUIDs&#x3D;uuid2&#x60;.  The response contains only data associated with the specified transactions.  | [Optional] |
| **subledgerId** | `string` | The ID of the subledger used to filter the data. Leave this value empty (\&quot;\&quot;) to query the main ledger. | [Optional] [Defaults to `undefined`] |
| **loyaltyTransactionType** | `manual`, `session`, `import` | Filter results by loyalty transaction type: - &#x60;manual&#x60;: Loyalty transaction that was done manually. - &#x60;session&#x60;: Loyalty transaction that resulted from a customer session. - &#x60;import&#x60;: Loyalty transaction that was imported from a CSV file.  | [Optional] [Defaults to `undefined`] [Enum: manual, session, import] |
| **startDate** | `Date` | Date and time from which results are returned. Results are filtered by transaction creation date.  **Note:**  - It must be an RFC3339 timestamp string. - You can include a time component in your string, for example, &#x60;T23:59:59&#x60; to specify the end of the day. The time zone setting considered is &#x60;UTC&#x60;. If you do not include a time component, a default time value of &#x60;T00:00:00&#x60; (midnight) in &#x60;UTC&#x60; is considered.  | [Optional] [Defaults to `undefined`] |
| **endDate** | `Date` | Date and time by which results are returned. Results are filtered by transaction creation date.  **Note:**  - It must be an RFC3339 timestamp string. - You can include a time component in your string, for example, &#x60;T23:59:59&#x60; to specify the end of the day. The time zone setting considered is &#x60;UTC&#x60;. If you do not include a time component, a default time value of &#x60;T00:00:00&#x60; (midnight) in &#x60;UTC&#x60; is considered.  | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `50`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **awaitsActivation** | `boolean` | If &#x60;true&#x60;: Filters results to include only point transactions that have action-based activation and have not expired.  If &#x60;false&#x60;: Returns a &#x60;400&#x60; response.  | [Optional] [Defaults to `undefined`] |

### Return type

[**GetLoyaltyProgramProfileTransactions200Response**](GetLoyaltyProgramProfileTransactions200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLoyaltyProgramTransactions

> GetLoyaltyProgramTransactions200Response getLoyaltyProgramTransactions(loyaltyProgramId, loyaltyTransactionType, subledgerId, customerSessionIDs, transactionUUIDs, startDate, endDate, pageSize, skip, awaitsActivation)

List loyalty program transactions

Retrieve loyalty program transaction logs in a given loyalty program with filtering options applied. Manual and imported transactions are also included. **Note:** If no filters are applied, the last 50 loyalty transactions for the given loyalty program are returned.  **Important:** To get loyalty transaction logs for a given Integration ID in a loyalty program, we recommend using the Integration API\&#39;s [Get customer\&#39;s loyalty logs](https://docs.talon.one/integration-api#tag/Loyalty/operation/getLoyaltyProgramProfileTransactions). 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetLoyaltyProgramTransactionsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | Identifier of the loyalty program. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
    loyaltyProgramId: 789,
    // 'manual' | 'session' | 'import' | Filter results by loyalty transaction type: - `manual`: Loyalty transaction that was done manually. - `session`: Loyalty transaction that resulted from a customer session. - `import`: Loyalty transaction that was imported from a CSV file.  (optional)
    loyaltyTransactionType: loyaltyTransactionType_example,
    // string | The ID of the subledger by which we filter the data. (optional)
    subledgerId: subledgerId_example,
    // Array<string> | Filter the results by a list of customer session IDs.   To include multiple IDs, repeat the parameter for each one, for example,  `?customerSessionIDs=id1&customerSessionIDs=id2`.  The response contains only data associated with the specified sessions.  (optional)
    customerSessionIDs: ...,
    // Array<string> | Filter the results by a list of transaction UUIDs.  To include multiple IDs, repeat the parameter for each one, for example,  `?transactionUUIDs=uuid1&transactionUUIDs=uuid2`.  The response contains only data associated with the specified transactions.  (optional)
    transactionUUIDs: ...,
    // Date | Date and time from which results are returned. Results are filtered by transaction creation date.  **Note:**  - It must be an RFC3339 timestamp string. - You can include a time component in your string, for example, `T23:59:59` to specify the end of the day. The time zone setting considered is `UTC`. If you do not include a time component, a default time value of `T00:00:00` (midnight) in `UTC` is considered.  (optional)
    startDate: 2013-10-20T19:20:30+01:00,
    // Date | Date and time by which results are returned. Results are filtered by transaction creation date.  **Note:**  - It must be an RFC3339 timestamp string. - You can include a time component in your string, for example, `T23:59:59` to specify the end of the day. The time zone setting considered is `UTC`. If you do not include a time component, a default time value of `T00:00:00` (midnight) in `UTC` is considered.  (optional)
    endDate: 2013-10-20T19:20:30+01:00,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // boolean | If `true`: Filters results to include only point transactions that have action-based activation and have not expired.  If `false`: Returns a `400` response.  (optional)
    awaitsActivation: true,
  } satisfies GetLoyaltyProgramTransactionsRequest;

  try {
    const data = await api.getLoyaltyProgramTransactions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `number` | Identifier of the loyalty program. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | [Defaults to `undefined`] |
| **loyaltyTransactionType** | `manual`, `session`, `import` | Filter results by loyalty transaction type: - &#x60;manual&#x60;: Loyalty transaction that was done manually. - &#x60;session&#x60;: Loyalty transaction that resulted from a customer session. - &#x60;import&#x60;: Loyalty transaction that was imported from a CSV file.  | [Optional] [Defaults to `undefined`] [Enum: manual, session, import] |
| **subledgerId** | `string` | The ID of the subledger by which we filter the data. | [Optional] [Defaults to `undefined`] |
| **customerSessionIDs** | `Array<string>` | Filter the results by a list of customer session IDs.   To include multiple IDs, repeat the parameter for each one, for example,  &#x60;?customerSessionIDs&#x3D;id1&amp;customerSessionIDs&#x3D;id2&#x60;.  The response contains only data associated with the specified sessions.  | [Optional] |
| **transactionUUIDs** | `Array<string>` | Filter the results by a list of transaction UUIDs.  To include multiple IDs, repeat the parameter for each one, for example,  &#x60;?transactionUUIDs&#x3D;uuid1&amp;transactionUUIDs&#x3D;uuid2&#x60;.  The response contains only data associated with the specified transactions.  | [Optional] |
| **startDate** | `Date` | Date and time from which results are returned. Results are filtered by transaction creation date.  **Note:**  - It must be an RFC3339 timestamp string. - You can include a time component in your string, for example, &#x60;T23:59:59&#x60; to specify the end of the day. The time zone setting considered is &#x60;UTC&#x60;. If you do not include a time component, a default time value of &#x60;T00:00:00&#x60; (midnight) in &#x60;UTC&#x60; is considered.  | [Optional] [Defaults to `undefined`] |
| **endDate** | `Date` | Date and time by which results are returned. Results are filtered by transaction creation date.  **Note:**  - It must be an RFC3339 timestamp string. - You can include a time component in your string, for example, &#x60;T23:59:59&#x60; to specify the end of the day. The time zone setting considered is &#x60;UTC&#x60;. If you do not include a time component, a default time value of &#x60;T00:00:00&#x60; (midnight) in &#x60;UTC&#x60; is considered.  | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `50`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **awaitsActivation** | `boolean` | If &#x60;true&#x60;: Filters results to include only point transactions that have action-based activation and have not expired.  If &#x60;false&#x60;: Returns a &#x60;400&#x60; response.  | [Optional] [Defaults to `undefined`] |

### Return type

[**GetLoyaltyProgramTransactions200Response**](GetLoyaltyProgramTransactions200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLoyaltyPrograms

> GetLoyaltyPrograms200Response getLoyaltyPrograms()

List loyalty programs

List the loyalty programs of the account.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetLoyaltyProgramsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  try {
    const data = await api.getLoyaltyPrograms();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetLoyaltyPrograms200Response**](GetLoyaltyPrograms200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLoyaltyStatistics

> LoyaltyDashboardData getLoyaltyStatistics(loyaltyProgramId)

Get loyalty program statistics

⚠️ Deprecation notice: Support for requests to this endpoint will end soon. To retrieve statistics for a loyalty program, use the [Get statistics for loyalty dashboard](/management-api#tag/Loyalty/operation/getDashboardStatistics) endpoint.  Retrieve the statistics of the specified loyalty program, such as the total active points, pending points, spent points, and expired points. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetLoyaltyStatisticsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | Identifier of the loyalty program. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
    loyaltyProgramId: 789,
  } satisfies GetLoyaltyStatisticsRequest;

  try {
    const data = await api.getLoyaltyStatistics(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `number` | Identifier of the loyalty program. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | [Defaults to `undefined`] |

### Return type

[**LoyaltyDashboardData**](LoyaltyDashboardData.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMessageLogs

> MessageLogEntries getMessageLogs(entityType, messageID, changeType, notificationIDs, createdBefore, createdAfter, cursor, period, isSuccessful, applicationId, campaignId, loyaltyProgramId, responseCode, webhookIDs)

List message log entries

Retrieve all message log entries.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetMessageLogsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // 'application' | 'loyalty_program' | 'webhook' | The entity type the log is related to. 
    entityType: entityType_example,
    // string | Filter results by message ID. (optional)
    messageID: messageID_example,
    // 'CampaignEvaluationTreeChanged' | 'CampaignNotification' | 'CouponCreated' | 'CouponUpdated' | 'CouponDeleted' | 'AsyncCouponsCreated' | 'CouponsDeleted' | 'CouponsUpdated' | 'CouponCodeExpiring' | 'StrikethroughPrice' | 'LoyaltyPointsAdded' | 'LoyaltyPointsDeducted' | 'LoyaltyPointsExpiring' | 'LoyaltyPointsPendingToActive' | 'LoyaltyAddedDeductedPointsBalances' | 'LoyaltyCardAddedDeductedPointsBalances' | 'TierWillDowngrade' | 'TierUpgrade' | 'TierDowngrade' | 'LoyaltyCardPointsAdded' | 'LoyaltyCardPointsDeducted' | 'LoyaltyCardPointsExpiring' | Filter results by change type. (optional)
    changeType: changeType_example,
    // string | Filter results by notification ID (include up to 30 values, separated by a comma). (optional)
    notificationIDs: notificationIDs_example,
    // Date | Filter results where request and response times to return entries before parameter value, expected to be an RFC3339 timestamp string. Use UTC time. (optional)
    createdBefore: 2013-10-20T19:20:30+01:00,
    // Date | Filter results where request and response times to return entries after parameter value, expected to be an RFC3339 timestamp string. Use UTC time. (optional)
    createdAfter: 2013-10-20T19:20:30+01:00,
    // string | A specific unique value in the database. If this value is not given, the server fetches results starting with the first record.  (optional)
    cursor: BYTE_ARRAY_DATA_HERE,
    // '15m' | '30m' | '1h' | '4h' | '1d' | '2d' | Filter results by time period. Choose between the available relative time frames.  (optional)
    period: period_example,
    // boolean | Indicates whether to return log entries with either successful or unsuccessful HTTP response codes. When set to`true`, only log entries with `2xx` response codes are returned. When set to `false`, only log entries with `4xx` and `5xx` response codes are returned.  (optional)
    isSuccessful: true,
    // number | Filter results by Application ID. (optional)
    applicationId: 8.14,
    // number | Filter results by campaign ID. (optional)
    campaignId: 8.14,
    // number | Identifier of the loyalty program. (optional)
    loyaltyProgramId: 789,
    // number | Filter results by response status code. (optional)
    responseCode: 789,
    // string | Filter results by webhook ID (include up to 30 values, separated by a comma). (optional)
    webhookIDs: webhookIDs_example,
  } satisfies GetMessageLogsRequest;

  try {
    const data = await api.getMessageLogs(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **entityType** | `application`, `loyalty_program`, `webhook` | The entity type the log is related to.  | [Defaults to `undefined`] [Enum: application, loyalty_program, webhook] |
| **messageID** | `string` | Filter results by message ID. | [Optional] [Defaults to `undefined`] |
| **changeType** | `CampaignEvaluationTreeChanged`, `CampaignNotification`, `CouponCreated`, `CouponUpdated`, `CouponDeleted`, `AsyncCouponsCreated`, `CouponsDeleted`, `CouponsUpdated`, `CouponCodeExpiring`, `StrikethroughPrice`, `LoyaltyPointsAdded`, `LoyaltyPointsDeducted`, `LoyaltyPointsExpiring`, `LoyaltyPointsPendingToActive`, `LoyaltyAddedDeductedPointsBalances`, `LoyaltyCardAddedDeductedPointsBalances`, `TierWillDowngrade`, `TierUpgrade`, `TierDowngrade`, `LoyaltyCardPointsAdded`, `LoyaltyCardPointsDeducted`, `LoyaltyCardPointsExpiring` | Filter results by change type. | [Optional] [Defaults to `undefined`] [Enum: CampaignEvaluationTreeChanged, CampaignNotification, CouponCreated, CouponUpdated, CouponDeleted, AsyncCouponsCreated, CouponsDeleted, CouponsUpdated, CouponCodeExpiring, StrikethroughPrice, LoyaltyPointsAdded, LoyaltyPointsDeducted, LoyaltyPointsExpiring, LoyaltyPointsPendingToActive, LoyaltyAddedDeductedPointsBalances, LoyaltyCardAddedDeductedPointsBalances, TierWillDowngrade, TierUpgrade, TierDowngrade, LoyaltyCardPointsAdded, LoyaltyCardPointsDeducted, LoyaltyCardPointsExpiring] |
| **notificationIDs** | `string` | Filter results by notification ID (include up to 30 values, separated by a comma). | [Optional] [Defaults to `undefined`] |
| **createdBefore** | `Date` | Filter results where request and response times to return entries before parameter value, expected to be an RFC3339 timestamp string. Use UTC time. | [Optional] [Defaults to `undefined`] |
| **createdAfter** | `Date` | Filter results where request and response times to return entries after parameter value, expected to be an RFC3339 timestamp string. Use UTC time. | [Optional] [Defaults to `undefined`] |
| **cursor** | `string` | A specific unique value in the database. If this value is not given, the server fetches results starting with the first record.  | [Optional] [Defaults to `undefined`] |
| **period** | `15m`, `30m`, `1h`, `4h`, `1d`, `2d` | Filter results by time period. Choose between the available relative time frames.  | [Optional] [Defaults to `undefined`] [Enum: 15m, 30m, 1h, 4h, 1d, 2d] |
| **isSuccessful** | `boolean` | Indicates whether to return log entries with either successful or unsuccessful HTTP response codes. When set to&#x60;true&#x60;, only log entries with &#x60;2xx&#x60; response codes are returned. When set to &#x60;false&#x60;, only log entries with &#x60;4xx&#x60; and &#x60;5xx&#x60; response codes are returned.  | [Optional] [Defaults to `undefined`] |
| **applicationId** | `number` | Filter results by Application ID. | [Optional] [Defaults to `undefined`] |
| **campaignId** | `number` | Filter results by campaign ID. | [Optional] [Defaults to `undefined`] |
| **loyaltyProgramId** | `number` | Identifier of the loyalty program. | [Optional] [Defaults to `undefined`] |
| **responseCode** | `number` | Filter results by response status code. | [Optional] [Defaults to `undefined`] |
| **webhookIDs** | `string` | Filter results by webhook ID (include up to 30 values, separated by a comma). | [Optional] [Defaults to `undefined`] |

### Return type

[**MessageLogEntries**](MessageLogEntries.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getReferralsWithoutTotalCount

> GetReferralsWithoutTotalCount200Response getReferralsWithoutTotalCount(applicationId, campaignId, pageSize, skip, sort, code, createdBefore, createdAfter, valid, usable, advocate)

List referrals

List all referrals of the specified campaign.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetReferralsWithoutTotalCountRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // string | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with `-`.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  (optional)
    sort: sort_example,
    // string | Filter results performing case-insensitive matching against the referral code. Both the code and the query are folded to remove all non-alpha-numeric characters. (optional)
    code: code_example,
    // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    createdBefore: 2013-10-20T19:20:30+01:00,
    // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    createdAfter: 2013-10-20T19:20:30+01:00,
    // 'expired' | 'validNow' | 'validFuture' | Either \"expired\", \"validNow\", or \"validFuture\". The first option matches referrals in which the expiration date is set and in the past. The second matches referrals in which start date is null or in the past and expiration date is null or in the future, the third matches referrals in which start date is set and in the future.  (optional)
    valid: valid_example,
    // 'true' | 'false' | Either \"true\" or \"false\". If \"true\", only referrals where `usageCounter < usageLimit` will be returned, \"false\" will return only referrals where `usageCounter >= usageLimit`.  (optional)
    usable: usable_example,
    // string | Filter results by match with a profile ID specified in the referral\'s AdvocateProfileIntegrationId field. (optional)
    advocate: advocate_example,
  } satisfies GetReferralsWithoutTotalCountRequest;

  try {
    const data = await api.getReferralsWithoutTotalCount(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with &#x60;-&#x60;.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  | [Optional] [Defaults to `undefined`] |
| **code** | `string` | Filter results performing case-insensitive matching against the referral code. Both the code and the query are folded to remove all non-alpha-numeric characters. | [Optional] [Defaults to `undefined`] |
| **createdBefore** | `Date` | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **createdAfter** | `Date` | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the referral creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **valid** | `expired`, `validNow`, `validFuture` | Either \&quot;expired\&quot;, \&quot;validNow\&quot;, or \&quot;validFuture\&quot;. The first option matches referrals in which the expiration date is set and in the past. The second matches referrals in which start date is null or in the past and expiration date is null or in the future, the third matches referrals in which start date is set and in the future.  | [Optional] [Defaults to `undefined`] [Enum: expired, validNow, validFuture] |
| **usable** | `true`, `false` | Either \&quot;true\&quot; or \&quot;false\&quot;. If \&quot;true\&quot;, only referrals where &#x60;usageCounter &lt; usageLimit&#x60; will be returned, \&quot;false\&quot; will return only referrals where &#x60;usageCounter &gt;&#x3D; usageLimit&#x60;.  | [Optional] [Defaults to `undefined`] [Enum: true, false] |
| **advocate** | `string` | Filter results by match with a profile ID specified in the referral\&#39;s AdvocateProfileIntegrationId field. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetReferralsWithoutTotalCount200Response**](GetReferralsWithoutTotalCount200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRoleV2

> RoleV2 getRoleV2(roleId)

Get role

Get the details of a specific role. To see all the roles, use the [List roles](/management-api#tag/Roles/operation/listAllRolesV2) endpoint. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetRoleV2Request } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of role.  **Note**: To find the ID of a role, use the [List roles](/management-api#tag/Roles/operation/listAllRolesV2) endpoint. 
    roleId: 789,
  } satisfies GetRoleV2Request;

  try {
    const data = await api.getRoleV2(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **roleId** | `number` | The ID of role.  **Note**: To find the ID of a role, use the [List roles](/management-api#tag/Roles/operation/listAllRolesV2) endpoint.  | [Defaults to `undefined`] |

### Return type

[**RoleV2**](RoleV2.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRuleset

> Ruleset getRuleset(applicationId, campaignId, rulesetId)

Get ruleset

Retrieve the specified ruleset.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetRulesetRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // number | The ID of the ruleset.
    rulesetId: 789,
  } satisfies GetRulesetRequest;

  try {
    const data = await api.getRuleset(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **rulesetId** | `number` | The ID of the ruleset. | [Defaults to `undefined`] |

### Return type

[**Ruleset**](Ruleset.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRulesets

> GetRulesets200Response getRulesets(applicationId, campaignId, pageSize, skip, sort)

List campaign rulesets

List all rulesets of this campaign. A ruleset is a revision of the rules of a campaign. **Important:** The response also includes deleted rules. You should only consider the latest revision of the returned rulesets. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetRulesetsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // string | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with `-`.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  (optional)
    sort: sort_example,
  } satisfies GetRulesetsRequest;

  try {
    const data = await api.getRulesets(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with &#x60;-&#x60;.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  | [Optional] [Defaults to `undefined`] |

### Return type

[**GetRulesets200Response**](GetRulesets200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getStore

> Store getStore(applicationId, storeId)

Get store

Get store details for a specific store ID.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetStoreRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // string | The ID of the store. You can get this ID with the [List stores](#tag/Stores/operation/listStores) endpoint. 
    storeId: storeId_example,
  } satisfies GetStoreRequest;

  try {
    const data = await api.getStore(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **storeId** | `string` | The ID of the store. You can get this ID with the [List stores](#tag/Stores/operation/listStores) endpoint.  | [Defaults to `undefined`] |

### Return type

[**Store**](Store.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUser

> User getUser(userId)

Get user

Retrieve the data (including an invitation code) for a user. Non-admin users can only get their own profile. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetUserRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the user.
    userId: 789,
  } satisfies GetUserRequest;

  try {
    const data = await api.getUser(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userId** | `number` | The ID of the user. | [Defaults to `undefined`] |

### Return type

[**User**](User.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUsers

> GetUsers200Response getUsers(pageSize, skip, sort)

List users in account

Retrieve all users in your account. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetUsersRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // string | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with `-`.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  (optional)
    sort: sort_example,
  } satisfies GetUsersRequest;

  try {
    const data = await api.getUsers(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with &#x60;-&#x60;.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  | [Optional] [Defaults to `undefined`] |

### Return type

[**GetUsers200Response**](GetUsers200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWebhook

> Webhook getWebhook(webhookId)

Get webhook

Returns a webhook by its id.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetWebhookRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the webhook. You can find the ID in the Campaign Manager\'s URL when you display the details of the webhook in **Account** > **Webhooks**. 
    webhookId: 789,
  } satisfies GetWebhookRequest;

  try {
    const data = await api.getWebhook(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **webhookId** | `number` | The ID of the webhook. You can find the ID in the Campaign Manager\&#39;s URL when you display the details of the webhook in **Account** &gt; **Webhooks**.  | [Defaults to `undefined`] |

### Return type

[**Webhook**](Webhook.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWebhooks

> GetWebhooks200Response getWebhooks(applicationIds, sort, pageSize, skip, creationType, visibility, outgoingIntegrationsTypeId, title)

List webhooks

List all webhooks.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { GetWebhooksRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // string | Checks if the given catalog or its attributes are referenced in the specified Application ID.  **Note**: If no Application ID is provided, we check for all connected Applications.  (optional)
    applicationIds: applicationIds_example,
    // string | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with `-`.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  (optional)
    sort: sort_example,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // 'templateWebhooks' | 'webhooks' | Filter results by creation type. (optional)
    creationType: creationType_example,
    // 'visible' | 'hidden' | Filter results by visibility. (optional)
    visibility: visibility_example,
    // number | Filter results by outgoing integration type ID. (optional)
    outgoingIntegrationsTypeId: 789,
    // string | Filter results performing case-insensitive matching against the webhook title. (optional)
    title: title_example,
  } satisfies GetWebhooksRequest;

  try {
    const data = await api.getWebhooks(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationIds** | `string` | Checks if the given catalog or its attributes are referenced in the specified Application ID.  **Note**: If no Application ID is provided, we check for all connected Applications.  | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with &#x60;-&#x60;.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **creationType** | `templateWebhooks`, `webhooks` | Filter results by creation type. | [Optional] [Defaults to `undefined`] [Enum: templateWebhooks, webhooks] |
| **visibility** | `visible`, `hidden` | Filter results by visibility. | [Optional] [Defaults to `undefined`] [Enum: visible, hidden] |
| **outgoingIntegrationsTypeId** | `number` | Filter results by outgoing integration type ID. | [Optional] [Defaults to `undefined`] |
| **title** | `string` | Filter results performing case-insensitive matching against the webhook title. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetWebhooks200Response**](GetWebhooks200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## importAccountCollection

> Import importAccountCollection(collectionId, upFile)

Import data into existing account-level collection

Upload a CSV file containing the collection of string values that should be attached as payload for collection. The file should be sent as multipart data.  The import **replaces** the initial content of the collection.  The CSV file **must** only contain the following column:  - &#x60;item&#x60;: the values in your collection.  A collection is limited to 500,000 items.  Example:  &#x60;&#x60;&#x60; item Addidas Nike Asics &#x60;&#x60;&#x60;  **Note:** Before sending a request to this endpoint, ensure the data in the CSV to import is different from the data currently stored in the collection. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ImportAccountCollectionRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the collection. You can get it with the [List collections in account](#operation/listAccountCollections) endpoint.
    collectionId: 789,
    // string | The file containing the data that is being imported. (optional)
    upFile: upFile_example,
  } satisfies ImportAccountCollectionRequest;

  try {
    const data = await api.importAccountCollection(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **collectionId** | `number` | The ID of the collection. You can get it with the [List collections in account](#operation/listAccountCollections) endpoint. | [Defaults to `undefined`] |
| **upFile** | `string` | The file containing the data that is being imported. | [Optional] [Defaults to `undefined`] |

### Return type

[**Import**](Import.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## importAllowedList

> Import importAllowedList(attributeId, upFile)

Import allowed values for attribute

Upload a CSV file containing a list of [picklist values](https://docs.talon.one/docs/product/account/dev-tools/managing-attributes#picklist-values) for the specified attribute.  The file should be sent as multipart data.  The import **replaces** the previous list of allowed values for this attribute, if any.  The CSV file **must** only contain the following column: - &#x60;item&#x60; (required): the values in your allowed list, for example a list of SKU\&#39;s.  An allowed list is limited to 500,000 items.  Example:  &#x60;&#x60;&#x60;text item CS-VG-04032021-UP-50D-10 CS-DV-04042021-UP-49D-12 CS-DG-02082021-UP-50G-07 &#x60;&#x60;&#x60; 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ImportAllowedListRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the attribute. You can find the ID in the Campaign Manager\'s URL when you display the details of an attribute in **Account** > **Tools** > **Attributes**.
    attributeId: 789,
    // string | The file containing the data that is being imported. (optional)
    upFile: upFile_example,
  } satisfies ImportAllowedListRequest;

  try {
    const data = await api.importAllowedList(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **attributeId** | `number` | The ID of the attribute. You can find the ID in the Campaign Manager\&#39;s URL when you display the details of an attribute in **Account** &gt; **Tools** &gt; **Attributes**. | [Defaults to `undefined`] |
| **upFile** | `string` | The file containing the data that is being imported. | [Optional] [Defaults to `undefined`] |

### Return type

[**Import**](Import.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid API key |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## importAudiencesMemberships

> Import importAudiencesMemberships(audienceId, upFile)

Import audience members

Upload a CSV file containing the integration IDs of the members you want to add to an audience.  The file should be sent as multipart data and should contain only the following column (required): - &#x60;profileintegrationid&#x60;: The integration ID of the customer profile.  The import **replaces** the previous list of audience members.  **Note:** We recommend limiting your file size to 500MB.  Example:  &#x60;&#x60;&#x60;text profileintegrationid charles alexa &#x60;&#x60;&#x60; 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ImportAudiencesMembershipsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the audience.
    audienceId: 789,
    // string | The file containing the data that is being imported. (optional)
    upFile: upFile_example,
  } satisfies ImportAudiencesMembershipsRequest;

  try {
    const data = await api.importAudiencesMemberships(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **audienceId** | `number` | The ID of the audience. | [Defaults to `undefined`] |
| **upFile** | `string` | The file containing the data that is being imported. | [Optional] [Defaults to `undefined`] |

### Return type

[**Import**](Import.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid API key |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## importCampaignStoreBudget

> Import importCampaignStoreBudget(applicationId, campaignId, action, period, upFile)

Import campaign store budgets

Upload a CSV file containing store budgets for a given campaign.  Send the file as multipart data.  The CSV file **must** only contain the following columns: - &#x60;store_integration_id&#x60;: The identifier of the store. - &#x60;limit&#x60;: The budget limit for the store.  The import **replaces** the previous list of store budgets. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ImportCampaignStoreBudgetRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // 'setDiscount' | The action that this budget is limiting. (optional)
    action: action_example,
    // 'overall' | 'daily' | 'weekly' | 'monthly' | 'yearly' | The period to which the limit applies.  **Note**: For budgets with no period, set this to `overall`.  (optional)
    period: period_example,
    // string | The file containing the data that is being imported. (optional)
    upFile: upFile_example,
  } satisfies ImportCampaignStoreBudgetRequest;

  try {
    const data = await api.importCampaignStoreBudget(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **action** | `setDiscount` | The action that this budget is limiting. | [Optional] [Defaults to `undefined`] [Enum: setDiscount] |
| **period** | `overall`, `daily`, `weekly`, `monthly`, `yearly` | The period to which the limit applies.  **Note**: For budgets with no period, set this to &#x60;overall&#x60;.  | [Optional] [Defaults to `undefined`] [Enum: overall, daily, weekly, monthly, yearly] |
| **upFile** | `string` | The file containing the data that is being imported. | [Optional] [Defaults to `undefined`] |

### Return type

[**Import**](Import.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## importCampaignStores

> Import importCampaignStores(applicationId, campaignId, upFile)

Import stores

Upload a CSV file containing the stores you want to link to a specific campaign.  Send the file as multipart data.  The CSV file **must** only contain the following column: - &#x60;store_integration_id&#x60;: The identifier of the store.  The import **replaces** the previous list of stores linked to the campaign. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ImportCampaignStoresRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // string | The file containing the data that is being imported. (optional)
    upFile: upFile_example,
  } satisfies ImportCampaignStoresRequest;

  try {
    const data = await api.importCampaignStores(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **upFile** | `string` | The file containing the data that is being imported. | [Optional] [Defaults to `undefined`] |

### Return type

[**Import**](Import.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid API key |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## importCollection

> Import importCollection(applicationId, campaignId, collectionId, upFile)

Import data into existing campaign-level collection

Upload a CSV file containing the collection of string values that should be attached as payload for collection. The file should be sent as multipart data.  The import **replaces** the initial content of the collection.  The CSV file **must** only contain the following column:  - &#x60;item&#x60;: the values in your collection.  A collection is limited to 500,000 items.  Example:  &#x60;&#x60;&#x60; item Addidas Nike Asics &#x60;&#x60;&#x60;  **Note:** Before sending a request to this endpoint, ensure the data in the CSV to import is different from the data currently stored in the collection. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ImportCollectionRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // number | The ID of the collection. You can get it with the [List collections in Application](#operation/listCollectionsInApplication) endpoint.
    collectionId: 789,
    // string | The file containing the data that is being imported. (optional)
    upFile: upFile_example,
  } satisfies ImportCollectionRequest;

  try {
    const data = await api.importCollection(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **collectionId** | `number` | The ID of the collection. You can get it with the [List collections in Application](#operation/listCollectionsInApplication) endpoint. | [Defaults to `undefined`] |
| **upFile** | `string` | The file containing the data that is being imported. | [Optional] [Defaults to `undefined`] |

### Return type

[**Import**](Import.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## importCoupons

> Import importCoupons(applicationId, campaignId, skipDuplicates, upFile)

Import coupons

Upload a CSV file containing the coupons that should be created. The file should be sent as multipart data.  The CSV file contains the following columns:  - &#x60;value&#x60; (required): The coupon code. - &#x60;expirydate&#x60;: The end date in RFC3339 of the code redemption period. - &#x60;startdate&#x60;: The start date in RFC3339 of the code redemption period. - &#x60;recipientintegrationid&#x60;: The integration ID of the recipient of the coupon.   Only the customer with this integration ID can redeem this code. Available only for personal codes. - &#x60;limitval&#x60;: The maximum number of redemptions of this code. For unlimited redemptions, use &#x60;0&#x60;. Defaults to &#x60;1&#x60; when not provided. - &#x60;discountlimit&#x60;: The total discount value that the code can give. This is typically used to represent a gift card value. - &#x60;attributes&#x60;: A JSON object describing _custom_ coupon attribute names and their values, enclosed with double quotation marks.    For example, if you created a [custom attribute](https://docs.talon.one/docs/dev/concepts/attributes#custom-attributes)   called &#x60;category&#x60; associated with the coupon entity, the object in the CSV file, when opened in a text editor, must be: &#x60;\&quot;{\&quot;category\&quot;: \&quot;10_off\&quot;}\&quot;&#x60;.  You can use the time zone of your choice. It is converted to UTC internally by Talon.One.  **Note:** We recommend limiting your file size to 500MB.  **Example:**  &#x60;&#x60;&#x60;text \&quot;value\&quot;,\&quot;expirydate\&quot;,\&quot;startdate\&quot;,\&quot;recipientintegrationid\&quot;,\&quot;limitval\&quot;,\&quot;attributes\&quot;,\&quot;discountlimit\&quot; COUP1,2018-07-01T04:00:00Z,2018-05-01T04:00:00Z,cust123,1,\&quot;{\&quot;\&quot;Category\&quot;\&quot;: \&quot;\&quot;10_off\&quot;\&quot;}\&quot;,2.4 &#x60;&#x60;&#x60;  Once imported, you can find the &#x60;batchId&#x60; in the Campaign Manager or by using [List coupons](#tag/Coupons/operation/getCouponsWithoutTotalCount). 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ImportCouponsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // boolean | An indicator of whether to skip duplicate coupon values instead of causing an error. Duplicate values are ignored when `skipDuplicates=true`.  (optional)
    skipDuplicates: true,
    // string | The file containing the data that is being imported. (optional)
    upFile: upFile_example,
  } satisfies ImportCouponsRequest;

  try {
    const data = await api.importCoupons(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **skipDuplicates** | `boolean` | An indicator of whether to skip duplicate coupon values instead of causing an error. Duplicate values are ignored when &#x60;skipDuplicates&#x3D;true&#x60;.  | [Optional] [Defaults to `undefined`] |
| **upFile** | `string` | The file containing the data that is being imported. | [Optional] [Defaults to `undefined`] |

### Return type

[**Import**](Import.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## importLoyaltyCards

> Import importLoyaltyCards(loyaltyProgramId, upFile)

Import loyalty cards

Upload a CSV file containing the loyalty cards that you want to use in your card-based loyalty program. Send the file as multipart data.  It contains the following columns for each card:  - &#x60;identifier&#x60; (required): The alphanumeric identifier of the loyalty card. - &#x60;state&#x60; (required): The state of the loyalty card. It can be &#x60;active&#x60; or &#x60;inactive&#x60;. - &#x60;customerprofileids&#x60; (optional): An array of strings representing the identifiers of the customer profiles linked to the loyalty card. The identifiers should be separated with a semicolon (;).  **Note:** We recommend limiting your file size to 500MB.  **Example:**  &#x60;&#x60;&#x60;csv identifier,state,customerprofileids 123-456-789AT,active,Alexa001;UserA &#x60;&#x60;&#x60; 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ImportLoyaltyCardsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
    loyaltyProgramId: 789,
    // string | The file containing the data that is being imported. (optional)
    upFile: upFile_example,
  } satisfies ImportLoyaltyCardsRequest;

  try {
    const data = await api.importLoyaltyCards(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `number` | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | [Defaults to `undefined`] |
| **upFile** | `string` | The file containing the data that is being imported. | [Optional] [Defaults to `undefined`] |

### Return type

[**Import**](Import.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## importLoyaltyCustomersTiers

> Import importLoyaltyCustomersTiers(loyaltyProgramId, upFile)

Import customers into loyalty tiers

Upload a CSV file containing existing customers to be assigned to existing tiers. Send the file as multipart data.  **Important:** This endpoint only works with loyalty programs with advanced tiers (with expiration and downgrade policy) feature enabled.  The CSV file should contain the following columns: - &#x60;subledgerid&#x60; (optional): The ID of the subledger. If this field is empty, the main ledger will be used. - &#x60;customerprofileid&#x60;: The integration ID of the customer profile to whom the tier should be assigned. - &#x60;tiername&#x60;: The name of an existing tier to assign to the customer. - &#x60;expirydate&#x60;: The expiration date of the tier when the tier is reevaluated. It should be a future date.  About customer assignment to a tier: - If the customer isn\&#39;t already in a tier, the customer is assigned to the specified tier during the tier import. - If the customer is already in the tier that\&#39;s specified in the CSV file, only the expiration date is updated.  **Note:** We recommend not using this endpoint to update the tier of a customer. To update a customer\&#39;s tier, you can [add](/management-api#tag/Loyalty/operation/addLoyaltyPoints) or [deduct](/management-api#tag/Loyalty/operation/removeLoyaltyPoints) their loyalty points.  You can use the time zone of your choice. It is converted to UTC internally by Talon.One.  **Note:** We recommend limiting your file size to 500MB.  **Example:** &#x60;&#x60;&#x60;csv subledgerid,customerprofileid,tiername,expirydate SUB1,alexa,Gold,2024-03-21T07:32:14Z ,george,Silver,2025-04-16T21:12:37Z SUB2,avocado,Bronze,2026-05-03T11:47:01Z &#x60;&#x60;&#x60; 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ImportLoyaltyCustomersTiersRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | Identifier of the loyalty program. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
    loyaltyProgramId: 789,
    // string | The file containing the data that is being imported. (optional)
    upFile: upFile_example,
  } satisfies ImportLoyaltyCustomersTiersRequest;

  try {
    const data = await api.importLoyaltyCustomersTiers(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `number` | Identifier of the loyalty program. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | [Defaults to `undefined`] |
| **upFile** | `string` | The file containing the data that is being imported. | [Optional] [Defaults to `undefined`] |

### Return type

[**Import**](Import.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## importLoyaltyPoints

> Import importLoyaltyPoints(loyaltyProgramId, notificationsEnabled, upFile)

Import loyalty points

Upload a CSV file containing the loyalty points you want to import into a given loyalty program. Send the file as multipart data.  Depending on the type of loyalty program, you can import points into a given customer profile or loyalty card.  The CSV file contains the following columns:  - &#x60;customerprofileid&#x60; (optional): For profile-based loyalty programs, the integration ID of the customer profile where the loyalty points are imported.    **Note**: If the customer profile does not exist, it will be created. The profile will not be visible in any Application   until a session or profile update is received for that profile. - &#x60;identifier&#x60; (optional): For card-based loyalty programs, the identifier of the loyalty card where the loyalty points are imported. - &#x60;amount&#x60;: The amount of points to award to the customer profile. - &#x60;startdate&#x60; (optional): The earliest date when the points can be redeemed. The points are &#x60;active&#x60; from this date until the expiration date.    This parameter accepts one of the following values:   - A timestamp string in RFC3339 format.   - &#x60;immediate&#x60;   - &#x60;on_action&#x60;      **Note**:   Empty or missing values default to &#x60;immediate&#x60;. - &#x60;expirydate&#x60; (optional): The latest date when the points can be redeemed. The points are &#x60;expired&#x60; after this date.    **Note**: It must be an RFC3339 timestamp string or string &#x60;unlimited&#x60;. Empty or missing values are considered &#x60;unlimited&#x60;.      If passed, &#x60;validityDuration&#x60; should be omitted. - &#x60;validityDuration&#x60; (optional): The duration for which the points remain active, relative to the    activation date.    The time format is an **integer** followed by one letter indicating the time unit.     Examples: &#x60;30s&#x60;, &#x60;40m&#x60;, &#x60;1h&#x60;, &#x60;5D&#x60;, &#x60;7W&#x60;, &#x60;10M&#x60;, &#x60;15Y&#x60;.     Available units:     - &#x60;s&#x60;: seconds   - &#x60;m&#x60;: minutes   - &#x60;h&#x60;: hours   - &#x60;D&#x60;: days   - &#x60;W&#x60;: weeks   - &#x60;M&#x60;: months   - &#x60;Y&#x60;: years     You can round certain units up or down:    - &#x60;_D&#x60; for rounding down days only. Signifies the start of the day.   - &#x60;_U&#x60; for rounding up days, weeks, months and years. Signifies the end of   the day, week, month or year.    If passed, &#x60;expirydate&#x60; should be omitted. - &#x60;subledgerid&#x60; (optional): The ID of the subledger that should received the points. - &#x60;reason&#x60; (optional): The reason why these points are awarded.  You can use the time zone of your choice. It is converted to UTC internally by Talon.One.  **Note:** For existing customer profiles and loyalty cards, the imported points are added to any previous active or pending points, depending on the value provided for &#x60;startdate&#x60;. If &#x60;startdate&#x60; matches the current date, the imported points are _active_. If it is later, the points are _pending_ until the date provided for &#x60;startdate&#x60; is reached.  **Note:** We recommend limiting your file size to 500MB.  **Example for profile-based programs:**  &#x60;&#x60;&#x60;text customerprofileid,amount,startdate,expirydate,subledgerid,reason URNGV8294NV,100,2009-11-10T23:00:00Z,2009-11-11T23:00:00Z,subledger1,appeasement &#x60;&#x60;&#x60;  **Example for card-based programs:**  &#x60;&#x60;&#x60;text identifier,amount,startdate,expirydate,subledgerid,reason summer-loyalty-card-0543,100,2009-11-10T23:00:00Z,2009-11-11T23:00:00Z,subledger1,appeasement &#x60;&#x60;&#x60; 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ImportLoyaltyPointsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | Identifier of the loyalty program. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
    loyaltyProgramId: 789,
    // boolean | Indicates whether the points import triggers notifications about its effects. For example, a notification is sent if the import upgrades a customer\'s tier or offsets their negative points balance.  This parameter is optional and defaults to `true`.  (optional)
    notificationsEnabled: true,
    // string | The file containing the data that is being imported. (optional)
    upFile: upFile_example,
  } satisfies ImportLoyaltyPointsRequest;

  try {
    const data = await api.importLoyaltyPoints(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `number` | Identifier of the loyalty program. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | [Defaults to `undefined`] |
| **notificationsEnabled** | `boolean` | Indicates whether the points import triggers notifications about its effects. For example, a notification is sent if the import upgrades a customer\&#39;s tier or offsets their negative points balance.  This parameter is optional and defaults to &#x60;true&#x60;.  | [Optional] [Defaults to `undefined`] |
| **upFile** | `string` | The file containing the data that is being imported. | [Optional] [Defaults to `undefined`] |

### Return type

[**Import**](Import.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## importPoolGiveaways

> Import importPoolGiveaways(poolId, upFile)

Import giveaway codes into a giveaway pool

Upload a CSV file containing the giveaway codes that should be created. Send the file as multipart data.  The CSV file contains the following columns: - &#x60;code&#x60; (required): The code of your giveaway, for instance, a gift card redemption code. - &#x60;startdate&#x60;:  The start date in RFC3339 of the code redemption period. - &#x60;enddate&#x60;: The last date in RFC3339 of the code redemption period. - &#x60;attributes&#x60;: A JSON object describing _custom_ giveaway attribute names and their values, enclosed with double quotation marks.    For example, if you created a [custom attribute](https://docs.talon.one/docs/dev/concepts/attributes#custom-attributes)   called &#x60;provider&#x60; associated with the giveaway entity, the object in the CSV file, when opened in a text editor, must be: &#x60;\&quot;{\&quot;provider\&quot;: \&quot;myPartnerCompany\&quot;}\&quot;&#x60;.  The &#x60;startdate&#x60; and &#x60;enddate&#x60; have nothing to do with the _validity_ of the codes. They are only used by the Rule Engine to award the codes or not. You can use the time zone setting of your choice. The values are converted to UTC internally by Talon.One.  **Note:**  - We recommend limiting your file size to 500MB. - You can import the same code multiple times. Duplicate codes are treated and distributed to customers as unique codes.  **Example:**  &#x60;&#x60;&#x60;text code,startdate,enddate,attributes GIVEAWAY1,2020-11-10T23:00:00Z,2022-11-11T23:00:00Z,\&quot;{\&quot;\&quot;provider\&quot;\&quot;: \&quot;\&quot;Amazon\&quot;\&quot;}\&quot; GIVEAWAY2,2020-11-10T23:00:00Z,2022-11-11T23:00:00Z,\&quot;{\&quot;\&quot;provider\&quot;\&quot;: \&quot;\&quot;Amazon\&quot;\&quot;}\&quot; GIVEAWAY3,2021-01-10T23:00:00Z,2022-11-11T23:00:00Z,\&quot;{\&quot;\&quot;provider\&quot;\&quot;: \&quot;\&quot;Aliexpress\&quot;\&quot;}\&quot; &#x60;&#x60;&#x60; 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ImportPoolGiveawaysRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the pool. You can find it in the Campaign Manager, in the **Giveaways** section.
    poolId: 789,
    // string | The file containing the data that is being imported. (optional)
    upFile: upFile_example,
  } satisfies ImportPoolGiveawaysRequest;

  try {
    const data = await api.importPoolGiveaways(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **poolId** | `number` | The ID of the pool. You can find it in the Campaign Manager, in the **Giveaways** section. | [Defaults to `undefined`] |
| **upFile** | `string` | The file containing the data that is being imported. | [Optional] [Defaults to `undefined`] |

### Return type

[**Import**](Import.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## importReferrals

> Import importReferrals(applicationId, campaignId, upFile)

Import referrals

Upload a CSV file containing the referrals that should be created. The file should be sent as multipart data.  The CSV file contains the following columns:  - &#x60;code&#x60; (required): The referral code. - &#x60;advocateprofileintegrationid&#x60; (required): The profile ID of the advocate. - &#x60;startdate&#x60;: The start date in RFC3339 of the code redemption period. - &#x60;expirydate&#x60;: The end date in RFC3339 of the code redemption period. - &#x60;limitval&#x60;: The maximum number of redemptions of this code. Defaults to &#x60;1&#x60; when left blank. - &#x60;attributes&#x60;: A JSON object describing _custom_ referral attribute names and their values, enclosed with double quotation marks.    For example, if you created a [custom attribute](https://docs.talon.one/docs/dev/concepts/attributes#custom-attributes)   called &#x60;category&#x60; associated with the referral entity, the object in the CSV file, when opened in a text editor, must be: &#x60;\&quot;{\&quot;category\&quot;: \&quot;10_off\&quot;}\&quot;&#x60;.  You can use the time zone of your choice. It is converted to UTC internally by Talon.One.  **Important:** When you import a CSV file with referrals, a [customer profile](https://docs.talon.one/docs/dev/concepts/entities/customer-profiles) is **not** automatically created for each &#x60;advocateprofileintegrationid&#x60; column value. Use the [Update customer profile](https://docs.talon.one/integration-api#tag/Customer-profiles/operation/updateCustomerProfileV2) endpoint or the [Update multiple customer profiles](https://docs.talon.one/integration-api#tag/Customer-profiles/operation/updateCustomerProfilesV2) endpoint to create the customer profiles.  **Note:** We recommend limiting your file size to 500MB.  **Example:**  &#x60;&#x60;&#x60;text code,startdate,expirydate,advocateprofileintegrationid,limitval,attributes REFERRAL_CODE1,2020-11-10T23:00:00Z,2021-11-11T23:00:00Z,integid_4,1,\&quot;{\&quot;\&quot;my_attribute\&quot;\&quot;: \&quot;\&quot;10_off\&quot;\&quot;}\&quot; REFERRAL_CODE2,2020-11-10T23:00:00Z,2021-11-11T23:00:00Z,integid1,1,\&quot;{\&quot;\&quot;my_attribute\&quot;\&quot;: \&quot;\&quot;20_off\&quot;\&quot;}\&quot; &#x60;&#x60;&#x60; 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ImportReferralsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // string | The file containing the data that is being imported. (optional)
    upFile: upFile_example,
  } satisfies ImportReferralsRequest;

  try {
    const data = await api.importReferrals(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **upFile** | `string` | The file containing the data that is being imported. | [Optional] [Defaults to `undefined`] |

### Return type

[**Import**](Import.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## inviteUserExternal

> inviteUserExternal(newExternalInvitation)

Invite user from identity provider

[Invite a user](https://docs.talon.one/docs/product/account/account-settings/managing-users#inviting-a-user) from an external identity provider to Talon.One by sending an invitation to their email address. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { InviteUserExternalRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // NewExternalInvitation | body
    newExternalInvitation: ...,
  } satisfies InviteUserExternalRequest;

  try {
    const data = await api.inviteUserExternal(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **newExternalInvitation** | [NewExternalInvitation](NewExternalInvitation.md) | body | |

### Return type

`void` (Empty response body)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Invitation email sent |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listAccountCollections

> ListAccountCollections200Response listAccountCollections(pageSize, skip, sort, withTotalResultSize, name)

List collections in account

List account-level collections in the account.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ListAccountCollectionsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // string | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with `-`.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  (optional)
    sort: sort_example,
    // boolean | When this flag is set, the result includes the total size of the result, across all pages. This might decrease performance on large data sets.  - When `true`: `hasMore` is true when there is a next page. `totalResultSize` is always zero. - When `false`: `hasMore` is always false. `totalResultSize` contains the total number of results for this query.  (optional)
    withTotalResultSize: true,
    // string | Filter by collection name. (optional)
    name: name_example,
  } satisfies ListAccountCollectionsRequest;

  try {
    const data = await api.listAccountCollections(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with &#x60;-&#x60;.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  | [Optional] [Defaults to `undefined`] |
| **withTotalResultSize** | `boolean` | When this flag is set, the result includes the total size of the result, across all pages. This might decrease performance on large data sets.  - When &#x60;true&#x60;: &#x60;hasMore&#x60; is true when there is a next page. &#x60;totalResultSize&#x60; is always zero. - When &#x60;false&#x60;: &#x60;hasMore&#x60; is always false. &#x60;totalResultSize&#x60; contains the total number of results for this query.  | [Optional] [Defaults to `undefined`] |
| **name** | `string` | Filter by collection name. | [Optional] [Defaults to `undefined`] |

### Return type

[**ListAccountCollections200Response**](ListAccountCollections200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listAchievements

> ListAchievements200Response listAchievements(applicationId, campaignId, pageSize, skip, title)

List achievements

List all the achievements for a specific campaign.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ListAchievementsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // string | Filter by the display name for the achievement in the campaign manager.  **Note**: If no `title` is provided, all the achievements from the campaign are returned.  (optional)
    title: title_example,
  } satisfies ListAchievementsRequest;

  try {
    const data = await api.listAchievements(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `50`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **title** | `string` | Filter by the display name for the achievement in the campaign manager.  **Note**: If no &#x60;title&#x60; is provided, all the achievements from the campaign are returned.  | [Optional] [Defaults to `undefined`] |

### Return type

[**ListAchievements200Response**](ListAchievements200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listAllRolesV2

> ListAllRolesV2200Response listAllRolesV2()

List roles

List all roles.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ListAllRolesV2Request } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  try {
    const data = await api.listAllRolesV2();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ListAllRolesV2200Response**](ListAllRolesV2200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listCampaignStoreBudgetLimits

> ListCampaignStoreBudgetLimits200Response listCampaignStoreBudgetLimits(applicationId, campaignId, action, period)

List campaign store budget limits

Return the store budget limits for a given campaign.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ListCampaignStoreBudgetLimitsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // 'setDiscount' | The action that this budget is limiting. (optional)
    action: action_example,
    // 'overall' | 'daily' | 'weekly' | 'monthly' | 'yearly' | The period to which the limit applies.  **Note**: For budgets with no period, set this to `overall`.  (optional)
    period: period_example,
  } satisfies ListCampaignStoreBudgetLimitsRequest;

  try {
    const data = await api.listCampaignStoreBudgetLimits(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **action** | `setDiscount` | The action that this budget is limiting. | [Optional] [Defaults to `undefined`] [Enum: setDiscount] |
| **period** | `overall`, `daily`, `weekly`, `monthly`, `yearly` | The period to which the limit applies.  **Note**: For budgets with no period, set this to &#x60;overall&#x60;.  | [Optional] [Defaults to `undefined`] [Enum: overall, daily, weekly, monthly, yearly] |

### Return type

[**ListCampaignStoreBudgetLimits200Response**](ListCampaignStoreBudgetLimits200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid API key |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listCatalogItems

> ListCatalogItems200Response listCatalogItems(catalogId, pageSize, skip, withTotalResultSize, sku, productNames)

List items in a catalog

Return a paginated list of cart items in the given catalog. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ListCatalogItemsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the catalog. You can find the ID in the Campaign Manager in **Account** > **Tools** > **Cart item catalogs**.
    catalogId: 789,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // boolean | When this flag is set, the result includes the total size of the result, across all pages. This might decrease performance on large data sets.  - When `true`: `hasMore` is true when there is a next page. `totalResultSize` is always zero. - When `false`: `hasMore` is always false. `totalResultSize` contains the total number of results for this query.  (optional)
    withTotalResultSize: true,
    // Array<string> | Filter results by one or more SKUs. Must be exact match. (optional)
    sku: ...,
    // Array<string> | Filter results by one or more product names. Must be exact match. (optional)
    productNames: ...,
  } satisfies ListCatalogItemsRequest;

  try {
    const data = await api.listCatalogItems(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **catalogId** | `number` | The ID of the catalog. You can find the ID in the Campaign Manager in **Account** &gt; **Tools** &gt; **Cart item catalogs**. | [Defaults to `undefined`] |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **withTotalResultSize** | `boolean` | When this flag is set, the result includes the total size of the result, across all pages. This might decrease performance on large data sets.  - When &#x60;true&#x60;: &#x60;hasMore&#x60; is true when there is a next page. &#x60;totalResultSize&#x60; is always zero. - When &#x60;false&#x60;: &#x60;hasMore&#x60; is always false. &#x60;totalResultSize&#x60; contains the total number of results for this query.  | [Optional] [Defaults to `undefined`] |
| **sku** | `Array<string>` | Filter results by one or more SKUs. Must be exact match. | [Optional] |
| **productNames** | `Array<string>` | Filter results by one or more product names. Must be exact match. | [Optional] |

### Return type

[**ListCatalogItems200Response**](ListCatalogItems200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listCollections

> ListAccountCollections200Response listCollections(applicationId, campaignId, pageSize, skip, sort, withTotalResultSize, name)

List collections in campaign

List collections in a given campaign.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ListCollectionsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // string | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with `-`.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  (optional)
    sort: sort_example,
    // boolean | When this flag is set, the result includes the total size of the result, across all pages. This might decrease performance on large data sets.  - When `true`: `hasMore` is true when there is a next page. `totalResultSize` is always zero. - When `false`: `hasMore` is always false. `totalResultSize` contains the total number of results for this query.  (optional)
    withTotalResultSize: true,
    // string | Filter by collection name. (optional)
    name: name_example,
  } satisfies ListCollectionsRequest;

  try {
    const data = await api.listCollections(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with &#x60;-&#x60;.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  | [Optional] [Defaults to `undefined`] |
| **withTotalResultSize** | `boolean` | When this flag is set, the result includes the total size of the result, across all pages. This might decrease performance on large data sets.  - When &#x60;true&#x60;: &#x60;hasMore&#x60; is true when there is a next page. &#x60;totalResultSize&#x60; is always zero. - When &#x60;false&#x60;: &#x60;hasMore&#x60; is always false. &#x60;totalResultSize&#x60; contains the total number of results for this query.  | [Optional] [Defaults to `undefined`] |
| **name** | `string` | Filter by collection name. | [Optional] [Defaults to `undefined`] |

### Return type

[**ListAccountCollections200Response**](ListAccountCollections200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listCollectionsInApplication

> ListAccountCollections200Response listCollectionsInApplication(applicationId, pageSize, skip, sort, withTotalResultSize, name)

List collections in Application

List campaign-level collections from all campaigns in a given Application.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ListCollectionsInApplicationRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // string | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with `-`.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  (optional)
    sort: sort_example,
    // boolean | When this flag is set, the result includes the total size of the result, across all pages. This might decrease performance on large data sets.  - When `true`: `hasMore` is true when there is a next page. `totalResultSize` is always zero. - When `false`: `hasMore` is always false. `totalResultSize` contains the total number of results for this query.  (optional)
    withTotalResultSize: true,
    // string | Filter by collection name. (optional)
    name: name_example,
  } satisfies ListCollectionsInApplicationRequest;

  try {
    const data = await api.listCollectionsInApplication(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with &#x60;-&#x60;.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  | [Optional] [Defaults to `undefined`] |
| **withTotalResultSize** | `boolean` | When this flag is set, the result includes the total size of the result, across all pages. This might decrease performance on large data sets.  - When &#x60;true&#x60;: &#x60;hasMore&#x60; is true when there is a next page. &#x60;totalResultSize&#x60; is always zero. - When &#x60;false&#x60;: &#x60;hasMore&#x60; is always false. &#x60;totalResultSize&#x60; contains the total number of results for this query.  | [Optional] [Defaults to `undefined`] |
| **name** | `string` | Filter by collection name. | [Optional] [Defaults to `undefined`] |

### Return type

[**ListAccountCollections200Response**](ListAccountCollections200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listStores

> ListStores200Response listStores(applicationId, pageSize, skip, sort, withTotalResultSize, campaignId, name, integrationId, query)

List stores

List all stores for a specific Application.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ListStoresRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // string | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with `-`.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  (optional)
    sort: sort_example,
    // boolean | When this flag is set, the result includes the total size of the result, across all pages. This might decrease performance on large data sets.  - When `true`: `hasMore` is true when there is a next page. `totalResultSize` is always zero. - When `false`: `hasMore` is always false. `totalResultSize` contains the total number of results for this query.  (optional)
    withTotalResultSize: true,
    // number | Filter results by campaign ID. (optional)
    campaignId: 8.14,
    // string | The name of the store. (optional)
    name: name_example,
    // string | The integration ID of the store. (optional)
    integrationId: integrationId_example,
    // string | Filter results by `name` or `integrationId`. (optional)
    query: query_example,
  } satisfies ListStoresRequest;

  try {
    const data = await api.listStores(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with &#x60;-&#x60;.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  | [Optional] [Defaults to `undefined`] |
| **withTotalResultSize** | `boolean` | When this flag is set, the result includes the total size of the result, across all pages. This might decrease performance on large data sets.  - When &#x60;true&#x60;: &#x60;hasMore&#x60; is true when there is a next page. &#x60;totalResultSize&#x60; is always zero. - When &#x60;false&#x60;: &#x60;hasMore&#x60; is always false. &#x60;totalResultSize&#x60; contains the total number of results for this query.  | [Optional] [Defaults to `undefined`] |
| **campaignId** | `number` | Filter results by campaign ID. | [Optional] [Defaults to `undefined`] |
| **name** | `string` | The name of the store. | [Optional] [Defaults to `undefined`] |
| **integrationId** | `string` | The integration ID of the store. | [Optional] [Defaults to `undefined`] |
| **query** | `string` | Filter results by &#x60;name&#x60; or &#x60;integrationId&#x60;. | [Optional] [Defaults to `undefined`] |

### Return type

[**ListStores200Response**](ListStores200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## oktaEventHandlerChallenge

> oktaEventHandlerChallenge()

Validate Okta API ownership

Validate the ownership of the API through a challenge-response mechanism.  This challenger endpoint is used by Okta to confirm that communication between Talon.One and Okta is correctly configured and accessible for provisioning and deprovisioning of Talon.One users, and that only Talon.One can receive and respond to events from Okta. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { OktaEventHandlerChallengeRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  try {
    const data = await api.oktaEventHandlerChallenge();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

`void` (Empty response body)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeLoyaltyPoints

> removeLoyaltyPoints(loyaltyProgramId, integrationId, deductLoyaltyPoints)

Deduct points from customer profile

Deduct points from the specified loyalty program and specified customer profile.  **Important:** - Only active points can be deducted. - Only pending points are rolled back when a session is cancelled or reopened.  To get the &#x60;integrationId&#x60; of the profile from a &#x60;sessionId&#x60;, use the [Update customer session](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { RemoveLoyaltyPointsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // string | The identifier for the loyalty program.
    loyaltyProgramId: loyaltyProgramId_example,
    // string | The integration identifier for this customer profile. Must be: - Unique within the deployment. - Stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  Once set, you cannot update this identifier. 
    integrationId: integrationId_example,
    // DeductLoyaltyPoints | body
    deductLoyaltyPoints: ...,
  } satisfies RemoveLoyaltyPointsRequest;

  try {
    const data = await api.removeLoyaltyPoints(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `string` | The identifier for the loyalty program. | [Defaults to `undefined`] |
| **integrationId** | `string` | The integration identifier for this customer profile. Must be: - Unique within the deployment. - Stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  Once set, you cannot update this identifier.  | [Defaults to `undefined`] |
| **deductLoyaltyPoints** | [DeductLoyaltyPoints](DeductLoyaltyPoints.md) | body | |

### Return type

`void` (Empty response body)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## resetPassword

> NewPassword resetPassword(newPassword)

Reset password

Consumes the supplied password reset token and updates the password for the associated account. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ResetPasswordRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // NewPassword | body
    newPassword: ...,
  } satisfies ResetPasswordRequest;

  try {
    const data = await api.resetPassword(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **newPassword** | [NewPassword](NewPassword.md) | body | |

### Return type

[**NewPassword**](NewPassword.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## scimCreateGroup

> ScimGroup scimCreateGroup(scimBaseGroup)

Create SCIM group

Create a new Talon.One group using the SCIM Group provisioning protocol with an identity provider, for example, Microsoft Entra ID, and assign members from the payload to the new group. In Talon.One, a &#x60;Group&#x60; corresponds to a [role](https://docs.talon.one/docs/product/account/account-settings/managing-roles), and &#x60;members&#x60; are the [users](https://docs.talon.one/docs/product/account/account-settings/managing-users) assigned to that role.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ScimCreateGroupRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // ScimBaseGroup | body
    scimBaseGroup: ...,
  } satisfies ScimCreateGroupRequest;

  try {
    const data = await api.scimCreateGroup(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **scimBaseGroup** | [ScimBaseGroup](ScimBaseGroup.md) | body | |

### Return type

[**ScimGroup**](ScimGroup.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## scimCreateUser

> ScimUser scimCreateUser(scimNewUser)

Create SCIM user

Create a new Talon.One user using the SCIM provisioning protocol with an identity provider, for example, Microsoft Entra ID.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ScimCreateUserRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // ScimNewUser | body
    scimNewUser: ...,
  } satisfies ScimCreateUserRequest;

  try {
    const data = await api.scimCreateUser(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **scimNewUser** | [ScimNewUser](ScimNewUser.md) | body | |

### Return type

[**ScimUser**](ScimUser.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## scimDeleteGroup

> scimDeleteGroup(groupId)

Delete SCIM group

Delete a specific group created using the SCIM provisioning protocol with an identity provider, for example, Microsoft Entra ID. In Talon.One, a &#x60;Group&#x60; corresponds to a [role](https://docs.talon.one/docs/product/account/account-settings/managing-roles), and &#x60;members&#x60; are the [users](https://docs.talon.one/docs/product/account/account-settings/managing-users) assigned to that role.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ScimDeleteGroupRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the group.
    groupId: 789,
  } satisfies ScimDeleteGroupRequest;

  try {
    const data = await api.scimDeleteGroup(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **groupId** | `number` | The ID of the group. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## scimDeleteUser

> scimDeleteUser(userId)

Delete SCIM user

Delete a specific Talon.One user created using the SCIM provisioning protocol with an identity provider, for example, Microsoft Entra ID.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ScimDeleteUserRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the user.
    userId: 789,
  } satisfies ScimDeleteUserRequest;

  try {
    const data = await api.scimDeleteUser(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userId** | `number` | The ID of the user. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## scimGetGroup

> ScimGroup scimGetGroup(groupId)

Get SCIM group

Retrieve data for a specific group created using the SCIM provisioning protocol with an identity provider, for example, Microsoft Entra ID. In Talon.One, a &#x60;Group&#x60; corresponds to a [role](https://docs.talon.one/docs/product/account/account-settings/managing-roles), and &#x60;members&#x60; are the [users](https://docs.talon.one/docs/product/account/account-settings/managing-users) assigned to that role.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ScimGetGroupRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the group.
    groupId: 789,
  } satisfies ScimGetGroupRequest;

  try {
    const data = await api.scimGetGroup(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **groupId** | `number` | The ID of the group. | [Defaults to `undefined`] |

### Return type

[**ScimGroup**](ScimGroup.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Group details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## scimGetGroups

> ScimGroupsListResponse scimGetGroups()

List SCIM groups

Retrieve a paginated list of groups created using the SCIM protocol with an identity provider, for example, Microsoft Entra ID. In Talon.One, a &#x60;Group&#x60; corresponds to a [role](https://docs.talon.one/docs/product/account/account-settings/managing-roles), and &#x60;members&#x60; are the [users](https://docs.talon.one/docs/product/account/account-settings/managing-users) assigned to that role.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ScimGetGroupsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  try {
    const data = await api.scimGetGroups();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ScimGroupsListResponse**](ScimGroupsListResponse.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of SCIM groups |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## scimGetResourceTypes

> ScimResourceTypesListResponse scimGetResourceTypes()

List supported SCIM resource types

Retrieve a list of resource types supported by the SCIM provisioning protocol.  Resource types define the various kinds of resources that can be managed via the SCIM API, such as users, groups, or custom-defined resources. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ScimGetResourceTypesRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  try {
    const data = await api.scimGetResourceTypes();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ScimResourceTypesListResponse**](ScimResourceTypesListResponse.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of resource types |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## scimGetSchemas

> ScimSchemasListResponse scimGetSchemas()

List supported SCIM schemas

Retrieve a list of schemas supported by the SCIM provisioning protocol.  Schemas define the structure and attributes of the different resources that can be managed via the SCIM API, such as users, groups, and any custom-defined resources. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ScimGetSchemasRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  try {
    const data = await api.scimGetSchemas();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ScimSchemasListResponse**](ScimSchemasListResponse.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of schemas supported by the SCIM provisioning protocol |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## scimGetServiceProviderConfig

> ScimServiceProviderConfigResponse scimGetServiceProviderConfig()

Get SCIM service provider configuration

Retrieve the configuration settings of the SCIM service provider. It provides details about the features and capabilities supported by the SCIM API, such as the different operation settings. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ScimGetServiceProviderConfigRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  try {
    const data = await api.scimGetServiceProviderConfig();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ScimServiceProviderConfigResponse**](ScimServiceProviderConfigResponse.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Service configuration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## scimGetUser

> ScimUser scimGetUser(userId)

Get SCIM user

Retrieve data for a specific Talon.One user created using the SCIM provisioning protocol with an identity provider, for example, Microsoft Entra ID.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ScimGetUserRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the user.
    userId: 789,
  } satisfies ScimGetUserRequest;

  try {
    const data = await api.scimGetUser(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userId** | `number` | The ID of the user. | [Defaults to `undefined`] |

### Return type

[**ScimUser**](ScimUser.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | User details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## scimGetUsers

> ScimUsersListResponse scimGetUsers()

List SCIM users

Retrieve a paginated list of users that have been provisioned using the SCIM protocol with an identity provider, for example, Microsoft Entra ID.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ScimGetUsersRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  try {
    const data = await api.scimGetUsers();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ScimUsersListResponse**](ScimUsersListResponse.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of SCIM users |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## scimPatchGroup

> ScimGroup scimPatchGroup(groupId, scimPatchRequest)

Update SCIM group attributes

Update certain attributes of a group created using the SCIM provisioning protocol with an identity provider, for example, Microsoft Entra ID. This endpoint allows for selective adding, removing, or replacing of specific group attributes while other attributes remain unchanged. In Talon.One, a &#x60;Group&#x60; corresponds to a [role](https://docs.talon.one/docs/product/account/account-settings/managing-roles), and &#x60;members&#x60; are the [users](https://docs.talon.one/docs/product/account/account-settings/managing-users) assigned to that role. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ScimPatchGroupRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the group.
    groupId: 789,
    // ScimPatchRequest | body
    scimPatchRequest: ...,
  } satisfies ScimPatchGroupRequest;

  try {
    const data = await api.scimPatchGroup(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **groupId** | `number` | The ID of the group. | [Defaults to `undefined`] |
| **scimPatchRequest** | [ScimPatchRequest](ScimPatchRequest.md) | body | |

### Return type

[**ScimGroup**](ScimGroup.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Group details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## scimPatchUser

> ScimUser scimPatchUser(userId, scimPatchRequest)

Update SCIM user attributes

Update certain attributes of a specific Talon.One user created using the SCIM provisioning protocol with an identity provider, for example, Microsoft Entra ID.  This endpoint allows for selective adding, removing, or replacing specific attributes while leaving other attributes unchanged. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ScimPatchUserRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the user.
    userId: 789,
    // ScimPatchRequest | body
    scimPatchRequest: ...,
  } satisfies ScimPatchUserRequest;

  try {
    const data = await api.scimPatchUser(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userId** | `number` | The ID of the user. | [Defaults to `undefined`] |
| **scimPatchRequest** | [ScimPatchRequest](ScimPatchRequest.md) | body | |

### Return type

[**ScimUser**](ScimUser.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | User details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## scimReplaceGroupAttributes

> ScimGroup scimReplaceGroupAttributes(groupId, scimBaseGroup)

Update SCIM group

Update the details of a specific group created using the SCIM provisioning protocol with an identity provider, for example, Microsoft Entra ID. This endpoint replaces all attributes of the given group with the attributes provided in the request payload. In Talon.One, a &#x60;Group&#x60; corresponds to a [role](https://docs.talon.one/docs/product/account/account-settings/managing-roles), and &#x60;members&#x60; are the [users](https://docs.talon.one/docs/product/account/account-settings/managing-users) assigned to that role. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ScimReplaceGroupAttributesRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the group.
    groupId: 789,
    // ScimBaseGroup | body
    scimBaseGroup: ...,
  } satisfies ScimReplaceGroupAttributesRequest;

  try {
    const data = await api.scimReplaceGroupAttributes(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **groupId** | `number` | The ID of the group. | [Defaults to `undefined`] |
| **scimBaseGroup** | [ScimBaseGroup](ScimBaseGroup.md) | body | |

### Return type

[**ScimGroup**](ScimGroup.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Group details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## scimReplaceUserAttributes

> ScimUser scimReplaceUserAttributes(userId, scimNewUser)

Update SCIM user

Update the details of a specific Talon.One user created using the SCIM provisioning protocol with an identity provider, for example, Microsoft Entra ID.  This endpoint replaces all attributes of the specific user with the attributes provided in the request payload. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { ScimReplaceUserAttributesRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the user.
    userId: 789,
    // ScimNewUser | body
    scimNewUser: ...,
  } satisfies ScimReplaceUserAttributesRequest;

  try {
    const data = await api.scimReplaceUserAttributes(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userId** | `number` | The ID of the user. | [Defaults to `undefined`] |
| **scimNewUser** | [ScimNewUser](ScimNewUser.md) | body | |

### Return type

[**ScimUser**](ScimUser.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | User details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchCouponsAdvancedApplicationWideWithoutTotalCount

> GetCouponsWithoutTotalCount200Response searchCouponsAdvancedApplicationWideWithoutTotalCount(applicationId, body, pageSize, skip, sort, value, createdBefore, createdAfter, valid, usable, referralId, recipientIntegrationId, batchId, exactMatch, campaignState)

List coupons that match the given attributes (without total count)

List the coupons whose attributes match the query criteria in all the campaigns of the given Application.  The match is successful if all the attributes of the request are found in a coupon, even if the coupon has more attributes that are not present on the request.  **Note:** The total count is not included in the response. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { SearchCouponsAdvancedApplicationWideWithoutTotalCountRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // object | body
    body: Object,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // string | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with `-`.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  (optional)
    sort: sort_example,
    // string | Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters. (optional)
    value: value_example,
    // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    createdBefore: 2013-10-20T19:20:30+01:00,
    // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    createdAfter: 2013-10-20T19:20:30+01:00,
    // 'expired' | 'validNow' | 'validFuture' | Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiration date is set and in the past. The second matches coupons in which start date is null or in the past and expiration date is null or in the future, the third matches coupons in which start date is set and in the future.  (optional)
    valid: valid_example,
    // 'true' | 'false' | Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`.  (optional)
    usable: usable_example,
    // number | Filter the results by matching them with the ID of a referral. This filter shows the coupons created by redeeming a referral code. (optional)
    referralId: 789,
    // string | Filter results by match with a profile ID specified in the coupon\'s RecipientIntegrationId field. (optional)
    recipientIntegrationId: recipientIntegrationId_example,
    // string | Filter results by batches of coupons (optional)
    batchId: batchId_example,
    // boolean | Filter results to an exact case-insensitive matching against the coupon code. (optional)
    exactMatch: true,
    // 'enabled' | 'disabled' | 'archived' | 'scheduled' | 'running' | 'expired' | 'staged' | Filter results by the state of the campaign.  - `enabled`: Campaigns that are scheduled, running (activated), or expired. - `running`: Campaigns that are running (activated). - `disabled`: Campaigns that are disabled. - `expired`: Campaigns that are expired. - `archived`: Campaigns that are archived.  (optional)
    campaignState: campaignState_example,
  } satisfies SearchCouponsAdvancedApplicationWideWithoutTotalCountRequest;

  try {
    const data = await api.searchCouponsAdvancedApplicationWideWithoutTotalCount(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **body** | `object` | body | |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with &#x60;-&#x60;.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  | [Optional] [Defaults to `undefined`] |
| **value** | `string` | Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters. | [Optional] [Defaults to `undefined`] |
| **createdBefore** | `Date` | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **createdAfter** | `Date` | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **valid** | `expired`, `validNow`, `validFuture` | Either \&quot;expired\&quot;, \&quot;validNow\&quot;, or \&quot;validFuture\&quot;. The first option matches coupons in which the expiration date is set and in the past. The second matches coupons in which start date is null or in the past and expiration date is null or in the future, the third matches coupons in which start date is set and in the future.  | [Optional] [Defaults to `undefined`] [Enum: expired, validNow, validFuture] |
| **usable** | `true`, `false` | Either \&quot;true\&quot; or \&quot;false\&quot;. If \&quot;true\&quot;, only coupons where &#x60;usageCounter &lt; usageLimit&#x60; will be returned, \&quot;false\&quot; will return only coupons where &#x60;usageCounter &gt;&#x3D; usageLimit&#x60;.  | [Optional] [Defaults to `undefined`] [Enum: true, false] |
| **referralId** | `number` | Filter the results by matching them with the ID of a referral. This filter shows the coupons created by redeeming a referral code. | [Optional] [Defaults to `undefined`] |
| **recipientIntegrationId** | `string` | Filter results by match with a profile ID specified in the coupon\&#39;s RecipientIntegrationId field. | [Optional] [Defaults to `undefined`] |
| **batchId** | `string` | Filter results by batches of coupons | [Optional] [Defaults to `undefined`] |
| **exactMatch** | `boolean` | Filter results to an exact case-insensitive matching against the coupon code. | [Optional] [Defaults to `false`] |
| **campaignState** | `enabled`, `disabled`, `archived`, `scheduled`, `running`, `expired`, `staged` | Filter results by the state of the campaign.  - &#x60;enabled&#x60;: Campaigns that are scheduled, running (activated), or expired. - &#x60;running&#x60;: Campaigns that are running (activated). - &#x60;disabled&#x60;: Campaigns that are disabled. - &#x60;expired&#x60;: Campaigns that are expired. - &#x60;archived&#x60;: Campaigns that are archived.  | [Optional] [Defaults to `undefined`] [Enum: enabled, disabled, archived, scheduled, running, expired, staged] |

### Return type

[**GetCouponsWithoutTotalCount200Response**](GetCouponsWithoutTotalCount200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## searchCouponsAdvancedWithoutTotalCount

> GetCouponsWithoutTotalCount200Response searchCouponsAdvancedWithoutTotalCount(applicationId, campaignId, body, pageSize, skip, sort, value, createdBefore, createdAfter, valid, usable, referralId, recipientIntegrationId, exactMatch, batchId)

List coupons that match the given attributes in campaign (without total count)

List the coupons whose attributes match the query criteria in the given campaign.  The match is successful if all the attributes of the request are found in a coupon, even if the coupon has more attributes that are not present on the request.  **Note:** The total count is not included in the response. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { SearchCouponsAdvancedWithoutTotalCountRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // object | body
    body: Object,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // string | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with `-`.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  (optional)
    sort: sort_example,
    // string | Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters. (optional)
    value: value_example,
    // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    createdBefore: 2013-10-20T19:20:30+01:00,
    // Date | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. (optional)
    createdAfter: 2013-10-20T19:20:30+01:00,
    // 'expired' | 'validNow' | 'validFuture' | Either \"expired\", \"validNow\", or \"validFuture\". The first option matches coupons in which the expiration date is set and in the past. The second matches coupons in which start date is null or in the past and expiration date is null or in the future, the third matches coupons in which start date is set and in the future.  (optional)
    valid: valid_example,
    // 'true' | 'false' | Either \"true\" or \"false\". If \"true\", only coupons where `usageCounter < usageLimit` will be returned, \"false\" will return only coupons where `usageCounter >= usageLimit`.  (optional)
    usable: usable_example,
    // number | Filter the results by matching them with the ID of a referral. This filter shows the coupons created by redeeming a referral code. (optional)
    referralId: 789,
    // string | Filter results by match with a profile ID specified in the coupon\'s RecipientIntegrationId field. (optional)
    recipientIntegrationId: recipientIntegrationId_example,
    // boolean | Filter results to an exact case-insensitive matching against the coupon code. (optional)
    exactMatch: true,
    // string | Filter results by batches of coupons (optional)
    batchId: batchId_example,
  } satisfies SearchCouponsAdvancedWithoutTotalCountRequest;

  try {
    const data = await api.searchCouponsAdvancedWithoutTotalCount(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **body** | `object` | body | |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **sort** | `string` | The field by which results should be sorted. By default, results are sorted in ascending order. To sort them in descending order, prefix the field name with &#x60;-&#x60;.  **Note:** You may not be able to use all fields for sorting. This is due to performance limitations.  | [Optional] [Defaults to `undefined`] |
| **value** | `string` | Filter results performing case-insensitive matching against the coupon code. Both the code and the query are folded to remove all non-alpha-numeric characters. | [Optional] [Defaults to `undefined`] |
| **createdBefore** | `Date` | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **createdAfter** | `Date` | Filter results comparing the parameter value, expected to be an RFC3339 timestamp string, to the coupon creation timestamp. You can use any time zone setting. Talon.One will convert to UTC internally. | [Optional] [Defaults to `undefined`] |
| **valid** | `expired`, `validNow`, `validFuture` | Either \&quot;expired\&quot;, \&quot;validNow\&quot;, or \&quot;validFuture\&quot;. The first option matches coupons in which the expiration date is set and in the past. The second matches coupons in which start date is null or in the past and expiration date is null or in the future, the third matches coupons in which start date is set and in the future.  | [Optional] [Defaults to `undefined`] [Enum: expired, validNow, validFuture] |
| **usable** | `true`, `false` | Either \&quot;true\&quot; or \&quot;false\&quot;. If \&quot;true\&quot;, only coupons where &#x60;usageCounter &lt; usageLimit&#x60; will be returned, \&quot;false\&quot; will return only coupons where &#x60;usageCounter &gt;&#x3D; usageLimit&#x60;.  | [Optional] [Defaults to `undefined`] [Enum: true, false] |
| **referralId** | `number` | Filter the results by matching them with the ID of a referral. This filter shows the coupons created by redeeming a referral code. | [Optional] [Defaults to `undefined`] |
| **recipientIntegrationId** | `string` | Filter results by match with a profile ID specified in the coupon\&#39;s RecipientIntegrationId field. | [Optional] [Defaults to `undefined`] |
| **exactMatch** | `boolean` | Filter results to an exact case-insensitive matching against the coupon code. | [Optional] [Defaults to `false`] |
| **batchId** | `string` | Filter results by batches of coupons | [Optional] [Defaults to `undefined`] |

### Return type

[**GetCouponsWithoutTotalCount200Response**](GetCouponsWithoutTotalCount200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## summarizeCampaignStoreBudget

> SummarizeCampaignStoreBudget200Response summarizeCampaignStoreBudget(applicationId, campaignId)

Get summary of campaign store budgets

Fetch a summary of all store budget information for a given campaign.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { SummarizeCampaignStoreBudgetRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
  } satisfies SummarizeCampaignStoreBudgetRequest;

  try {
    const data = await api.summarizeCampaignStoreBudget(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |

### Return type

[**SummarizeCampaignStoreBudget200Response**](SummarizeCampaignStoreBudget200Response.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid API key |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## transferLoyaltyCard

> transferLoyaltyCard(loyaltyProgramId, loyaltyCardId, transferLoyaltyCard)

Transfer card data

Transfer loyalty card data, such as linked customers, loyalty balances and transactions, from a given loyalty card to a new, automatically created loyalty card.  **Important:**  - The original card is automatically blocked once the new card is created, and it cannot be activated again. - The default status of the new card is _active_. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { TransferLoyaltyCardRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
    loyaltyProgramId: 789,
    // string | Identifier of the loyalty card. You can get the identifier with the [List loyalty cards](https://docs.talon.one/management-api#tag/Loyalty-cards/operation/getLoyaltyCards) endpoint. 
    loyaltyCardId: loyaltyCardId_example,
    // TransferLoyaltyCard | body
    transferLoyaltyCard: ...,
  } satisfies TransferLoyaltyCardRequest;

  try {
    const data = await api.transferLoyaltyCard(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `number` | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | [Defaults to `undefined`] |
| **loyaltyCardId** | `string` | Identifier of the loyalty card. You can get the identifier with the [List loyalty cards](https://docs.talon.one/management-api#tag/Loyalty-cards/operation/getLoyaltyCards) endpoint.  | [Defaults to `undefined`] |
| **transferLoyaltyCard** | [TransferLoyaltyCard](TransferLoyaltyCard.md) | body | |

### Return type

`void` (Empty response body)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateAccountCollection

> Collection updateAccountCollection(collectionId, updateCollection)

Update account-level collection

Edit the description of a given account-level collection and enable or disable the collection in the specified Applications.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { UpdateAccountCollectionRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the collection. You can get it with the [List collections in account](#operation/listAccountCollections) endpoint.
    collectionId: 789,
    // UpdateCollection | body
    updateCollection: ...,
  } satisfies UpdateAccountCollectionRequest;

  try {
    const data = await api.updateAccountCollection(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **collectionId** | `number` | The ID of the collection. You can get it with the [List collections in account](#operation/listAccountCollections) endpoint. | [Defaults to `undefined`] |
| **updateCollection** | [UpdateCollection](UpdateCollection.md) | body | |

### Return type

[**Collection**](Collection.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **409** | Conflict. A collection with this name already exists. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateAchievement

> Achievement updateAchievement(applicationId, campaignId, achievementId, updateAchievement)

Update achievement

Update the details of a specific achievement.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { UpdateAchievementRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // number | The ID of the achievement. You can get this ID with the [List achievement](https://docs.talon.one/management-api#tag/Achievements/operation/listAchievements) endpoint.
    achievementId: 789,
    // UpdateAchievement | body
    updateAchievement: ...,
  } satisfies UpdateAchievementRequest;

  try {
    const data = await api.updateAchievement(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **achievementId** | `number` | The ID of the achievement. You can get this ID with the [List achievement](https://docs.talon.one/management-api#tag/Achievements/operation/listAchievements) endpoint. | [Defaults to `undefined`] |
| **updateAchievement** | [UpdateAchievement](UpdateAchievement.md) | body | |

### Return type

[**Achievement**](Achievement.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateAdditionalCost

> AccountAdditionalCost updateAdditionalCost(additionalCostId, newAdditionalCost)

Update additional cost

Updates an existing additional cost. Once created, the only property of an additional cost that cannot be changed is the &#x60;name&#x60; property (or **API name** in the Campaign Manager). This restriction is in place to prevent accidentally breaking live integrations. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { UpdateAdditionalCostRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the additional cost. You can find the ID the the Campaign Manager\'s URL when you display the details of the cost in **Account** > **Tools** > **Additional costs**. 
    additionalCostId: 789,
    // NewAdditionalCost | body
    newAdditionalCost: ...,
  } satisfies UpdateAdditionalCostRequest;

  try {
    const data = await api.updateAdditionalCost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **additionalCostId** | `number` | The ID of the additional cost. You can find the ID the the Campaign Manager\&#39;s URL when you display the details of the cost in **Account** &gt; **Tools** &gt; **Additional costs**.  | [Defaults to `undefined`] |
| **newAdditionalCost** | [NewAdditionalCost](NewAdditionalCost.md) | body | |

### Return type

[**AccountAdditionalCost**](AccountAdditionalCost.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateAttribute

> Attribute updateAttribute(attributeId, newAttribute)

Update custom attribute

Update an existing custom attribute. Once created, the only property of a custom attribute that can be changed is the description.  To change the &#x60;type&#x60; or &#x60;name&#x60; property of a custom attribute, create a new attribute and update any relevant integrations and rules to use the new attribute. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { UpdateAttributeRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the attribute. You can find the ID in the Campaign Manager\'s URL when you display the details of an attribute in **Account** > **Tools** > **Attributes**.
    attributeId: 789,
    // NewAttribute | body
    newAttribute: ...,
  } satisfies UpdateAttributeRequest;

  try {
    const data = await api.updateAttribute(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **attributeId** | `number` | The ID of the attribute. You can find the ID in the Campaign Manager\&#39;s URL when you display the details of an attribute in **Account** &gt; **Tools** &gt; **Attributes**. | [Defaults to `undefined`] |
| **newAttribute** | [NewAttribute](NewAttribute.md) | body | |

### Return type

[**Attribute**](Attribute.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCampaign

> Campaign updateCampaign(applicationId, campaignId, updateCampaign)

Update campaign

Update the given campaign.  **Important:** You cannot use this endpoint to update campaigns if [campaign staging and revisions](https://docs.talon.one/docs/product/applications/managing-general-settings#campaign-staging-and-revisions) is enabled for your Application. 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { UpdateCampaignRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // UpdateCampaign | body
    updateCampaign: ...,
  } satisfies UpdateCampaignRequest;

  try {
    const data = await api.updateCampaign(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **updateCampaign** | [UpdateCampaign](UpdateCampaign.md) | body | |

### Return type

[**Campaign**](Campaign.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCollection

> Collection updateCollection(applicationId, campaignId, collectionId, updateCampaignCollection)

Update campaign-level collection\&#39;s description

Edit the description of a given campaign-level collection.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { UpdateCollectionRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // number | The ID of the collection. You can get it with the [List collections in Application](#operation/listCollectionsInApplication) endpoint.
    collectionId: 789,
    // UpdateCampaignCollection | body
    updateCampaignCollection: ...,
  } satisfies UpdateCollectionRequest;

  try {
    const data = await api.updateCollection(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **collectionId** | `number` | The ID of the collection. You can get it with the [List collections in Application](#operation/listCollectionsInApplication) endpoint. | [Defaults to `undefined`] |
| **updateCampaignCollection** | [UpdateCampaignCollection](UpdateCampaignCollection.md) | body | |

### Return type

[**Collection**](Collection.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCoupon

> Coupon updateCoupon(applicationId, campaignId, couponId, updateCoupon)

Update coupon

Update the specified coupon.  &lt;div class&#x3D;\&quot;redoc-section\&quot;&gt;   &lt;p class&#x3D;\&quot;title\&quot;&gt;Important&lt;/p&gt;    &lt;p&gt;With this &lt;code&gt;PUT&lt;/code&gt; endpoint, if you do not explicitly set a value for the &lt;code&gt;startDate&lt;/code&gt;, &lt;code&gt;expiryDate&lt;/code&gt;, and &lt;code&gt;recipientIntegrationId&lt;/code&gt; properties in your request, it is automatically set to &lt;code&gt;null&lt;/code&gt;.&lt;/p&gt;  &lt;/div&gt; 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { UpdateCouponRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // string | The internal ID of the coupon code. You can find this value in the `id` property from the [List coupons](https://docs.talon.one/management-api#tag/Coupons/operation/getCouponsWithoutTotalCount) endpoint response. 
    couponId: couponId_example,
    // UpdateCoupon | body
    updateCoupon: ...,
  } satisfies UpdateCouponRequest;

  try {
    const data = await api.updateCoupon(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **couponId** | `string` | The internal ID of the coupon code. You can find this value in the &#x60;id&#x60; property from the [List coupons](https://docs.talon.one/management-api#tag/Coupons/operation/getCouponsWithoutTotalCount) endpoint response.  | [Defaults to `undefined`] |
| **updateCoupon** | [UpdateCoupon](UpdateCoupon.md) | body | |

### Return type

[**Coupon**](Coupon.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCouponBatch

> updateCouponBatch(applicationId, campaignId, updateCouponBatch)

Update coupons

Update all coupons or a specific batch of coupons in the given campaign. You can find the &#x60;batchId&#x60; on the **Coupons** page of your campaign in the Campaign Manager, or you can use [List coupons](#operation/getCouponsWithoutTotalCount).  &lt;div class&#x3D;\&quot;redoc-section\&quot;&gt;   &lt;p class&#x3D;\&quot;title\&quot;&gt;Important&lt;/p&gt;    &lt;ul&gt;     &lt;li&gt;Only send sequential requests to this endpoint.&lt;/li&gt;     &lt;li&gt;Requests to this endpoint time out after 30 minutes. If you hit a timeout, contact our support team.&lt;/li&gt;     &lt;li&gt;With this &lt;code&gt;PUT&lt;/code&gt; endpoint, if you do not explicitly set a value for the &lt;code&gt;startDate&lt;/code&gt; and &lt;code&gt;expiryDate&lt;/code&gt; properties in your request, it is automatically set to &lt;code&gt;null&lt;/code&gt;.&lt;/li&gt;   &lt;/ul&gt;  &lt;/div&gt;  To update a specific coupon, use [Update coupon](#operation/updateCoupon). 

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { UpdateCouponBatchRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // UpdateCouponBatch | body
    updateCouponBatch: ...,
  } satisfies UpdateCouponBatchRequest;

  try {
    const data = await api.updateCouponBatch(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **updateCouponBatch** | [UpdateCouponBatch](UpdateCouponBatch.md) | body | |

### Return type

`void` (Empty response body)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateLoyaltyCard

> LoyaltyCard updateLoyaltyCard(loyaltyProgramId, loyaltyCardId, updateLoyaltyCard)

Update loyalty card status

Update the status of the given loyalty card. A card can be _active_ or _inactive_.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { UpdateLoyaltyCardRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
    loyaltyProgramId: 789,
    // string | Identifier of the loyalty card. You can get the identifier with the [List loyalty cards](https://docs.talon.one/management-api#tag/Loyalty-cards/operation/getLoyaltyCards) endpoint. 
    loyaltyCardId: loyaltyCardId_example,
    // UpdateLoyaltyCard | body
    updateLoyaltyCard: ...,
  } satisfies UpdateLoyaltyCardRequest;

  try {
    const data = await api.updateLoyaltyCard(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `number` | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | [Defaults to `undefined`] |
| **loyaltyCardId** | `string` | Identifier of the loyalty card. You can get the identifier with the [List loyalty cards](https://docs.talon.one/management-api#tag/Loyalty-cards/operation/getLoyaltyCards) endpoint.  | [Defaults to `undefined`] |
| **updateLoyaltyCard** | [UpdateLoyaltyCard](UpdateLoyaltyCard.md) | body | |

### Return type

[**LoyaltyCard**](LoyaltyCard.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateReferral

> Referral updateReferral(applicationId, campaignId, referralId, updateReferral)

Update referral

Update the specified referral.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { UpdateReferralRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // number | The ID of the campaign. It is displayed in your Talon.One deployment URL.
    campaignId: 789,
    // string | The ID of the referral code.
    referralId: referralId_example,
    // UpdateReferral | body
    updateReferral: ...,
  } satisfies UpdateReferralRequest;

  try {
    const data = await api.updateReferral(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **campaignId** | `number` | The ID of the campaign. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **referralId** | `string` | The ID of the referral code. | [Defaults to `undefined`] |
| **updateReferral** | [UpdateReferral](UpdateReferral.md) | body | |

### Return type

[**Referral**](Referral.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateRoleV2

> RoleV2 updateRoleV2(roleId, roleV2Base)

Update role

Update a specific role.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { UpdateRoleV2Request } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of role.  **Note**: To find the ID of a role, use the [List roles](/management-api#tag/Roles/operation/listAllRolesV2) endpoint. 
    roleId: 789,
    // RoleV2Base | body
    roleV2Base: ...,
  } satisfies UpdateRoleV2Request;

  try {
    const data = await api.updateRoleV2(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **roleId** | `number` | The ID of role.  **Note**: To find the ID of a role, use the [List roles](/management-api#tag/Roles/operation/listAllRolesV2) endpoint.  | [Defaults to `undefined`] |
| **roleV2Base** | [RoleV2Base](RoleV2Base.md) | body | |

### Return type

[**RoleV2**](RoleV2.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateStore

> Store updateStore(applicationId, storeId, newStore)

Update store

Update store details for a specific store ID.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { UpdateStoreRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the Application. It is displayed in your Talon.One deployment URL.
    applicationId: 789,
    // string | The ID of the store. You can get this ID with the [List stores](#tag/Stores/operation/listStores) endpoint. 
    storeId: storeId_example,
    // NewStore | body
    newStore: ...,
  } satisfies UpdateStoreRequest;

  try {
    const data = await api.updateStore(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **applicationId** | `number` | The ID of the Application. It is displayed in your Talon.One deployment URL. | [Defaults to `undefined`] |
| **storeId** | `string` | The ID of the store. You can get this ID with the [List stores](#tag/Stores/operation/listStores) endpoint.  | [Defaults to `undefined`] |
| **newStore** | [NewStore](NewStore.md) | body | |

### Return type

[**Store**](Store.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateUser

> User updateUser(userId, updateUser)

Update user

Update the details of a specific user.

### Example

```ts
import {
  Configuration,
  ManagementApi,
} from 'talon_one_sdk';
import type { UpdateUserRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new ManagementApi(config);

  const body = {
    // number | The ID of the user.
    userId: 789,
    // UpdateUser | body
    updateUser: ...,
  } satisfies UpdateUserRequest;

  try {
    const data = await api.updateUser(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userId** | `number` | The ID of the user. | [Defaults to `undefined`] |
| **updateUser** | [UpdateUser](UpdateUser.md) | body | |

### Return type

[**User**](User.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

