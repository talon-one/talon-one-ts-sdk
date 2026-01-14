.PHONY: apply-patch

apply-patch:
	@echo "Applying interface definition patch ..."
	@sed -i '' 's/export interface DeleteUserRequest {/export interface DeleteUserApiRequest {/g' src/apis/ManagementApi.ts
	@sed -i '' 's/requestParameters: DeleteUserRequest,/requestParameters: DeleteUserApiRequest,/g' src/apis/ManagementApi.ts
	@echo "Done.";
