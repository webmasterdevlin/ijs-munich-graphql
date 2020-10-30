## GraphQL Express, MongoDB

#### Query Requests

```
query {
    hello
}
```

```
query {
  events {
    title
    date
    attendants {
      name
    }
  }
}
```

```
query {
  event(id: 1) {
    title
    date
    attendants {
      name
    }
  }
}
```

```
mutation {
  editEvent(
    id: 2
    title: "Something else"
    description: "New information about this event"
  ) {
    title
    description
  }
}
```

```
query($rr: String) {
    event(id: $rr) {
      title
      date
      description
      attendants {
        name
      }
    }
}
```

- for the variables

```
{
  "rr": 2
}
```
