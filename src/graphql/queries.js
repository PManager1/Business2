/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRecord = /* GraphQL */ `
  query GetRecord($id: ID!) {
    getRecord(id: $id) {
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
export const listRecords = /* GraphQL */ `
  query ListRecords(
    $filter: ModelRecordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
