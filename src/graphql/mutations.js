/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRecord = /* GraphQL */ `
  mutation CreateRecord(
    $input: CreateRecordInput!
    $condition: ModelRecordConditionInput
  ) {
    createRecord(input: $input, condition: $condition) {
      id
      companyName
      business_size
      createdAt
      lastUpdated
      executiveFirstName
      executiveLastName
      contactPerson
      followupDate
      comment
      email
      priorities
      status
      phone_no
      cell_phone
      address
      city
      state
      last_date_call_was_made
      no_of_calls_made
      ownerStatus
      OwnerId
      OwnerUsername
      base
      updatedAt
    }
  }
`;
export const updateRecord = /* GraphQL */ `
  mutation UpdateRecord(
    $input: UpdateRecordInput!
    $condition: ModelRecordConditionInput
  ) {
    updateRecord(input: $input, condition: $condition) {
      id
      companyName
      business_size
      createdAt
      lastUpdated
      executiveFirstName
      executiveLastName
      contactPerson
      followupDate
      comment
      email
      priorities
      status
      phone_no
      cell_phone
      address
      city
      state
      last_date_call_was_made
      no_of_calls_made
      ownerStatus
      OwnerId
      OwnerUsername
      base
      updatedAt
    }
  }
`;
export const deleteRecord = /* GraphQL */ `
  mutation DeleteRecord(
    $input: DeleteRecordInput!
    $condition: ModelRecordConditionInput
  ) {
    deleteRecord(input: $input, condition: $condition) {
      id
      companyName
      business_size
      createdAt
      lastUpdated
      executiveFirstName
      executiveLastName
      contactPerson
      followupDate
      comment
      email
      priorities
      status
      phone_no
      cell_phone
      address
      city
      state
      last_date_call_was_made
      no_of_calls_made
      ownerStatus
      OwnerId
      OwnerUsername
      base
      updatedAt
    }
  }
`;
