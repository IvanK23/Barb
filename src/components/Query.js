const doUserQuery = async function () {
    // This value comes from a state variable
    const usernameSearchValue = usernameSearch;
    const showOnlyVerifiedValue = showOnlyVerified;
    const orderByValue = orderBy;
    // This will create your user query
    const parseQuery = new Parse.Query(Parse.User);
    // Several query functions can be set to your Parse,Query, they will
    // only resolve when calling "find", for example
    if (usernameSearchValue !== '') {
      // "contains" will retrieve users whose username contain the searched value, case-sensitive
      parseQuery.contains('username', usernameSearchValue);
      //
      // or
      //
      // for case-insensitive string search, use "matches", that will take into account
      // an regexp for matching, in this case use only "i", which is the regexp modifier
      // for case-insensitive
      parseQuery.matches('username', usernameSearchValue, 'i');
    }
    if (showOnlyVerifiedValue === true) {
      // "equalTo" will retrieve users whose "emailVerified" value is exactly "true"
      parseQuery.equalTo('emailVerified', true);
    }
    // For list ordering, you can use "addAscending" or "addDescending", passing as parameter
    // which object field should be the one to order by
    if (orderByValue === 'usernameAsc') {
      parseQuery.ascending('username');
      //
      // or
      //
      parseQuery.addAscending('username');
    } else if (orderByValue === 'usernameDesc') {
      parseQuery.descending('username');
      //
      // or
      //
      parseQuery.addDescending('username');
    } else if (orderByValue === 'dateAsc') {
      parseQuery.ascending('createdAt');
      //
      // or
      //
      parseQuery.addAscending('createdAt');
    } else if (orderByValue === 'dateDesc') {
      parseQuery.descending('createdAt');
      //
      // or
      //
      parseQuery.addDescending('createdAt');
    }
    // Only after calling "find" all query conditions will resolve
    return await parseQuery
      .find()
      .then(async (queriedUsers) => {
        // Set the query results to an state variable to retrieve it on your JSX
        // Be aware that empty or invalid queries return as an empty array
        setQueryResults(queriedUsers);
        return true;
      })
      .catch((error) => {
        // Error can be caused by lack of Internet connection, but in most
        // cases "find" will return as an empty array on "then"
        Alert.alert('Error!', error.message);
        setQueryResults([]);
        return false;
      });
  };