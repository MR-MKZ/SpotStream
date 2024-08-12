## Download from spotify

You can download from spotify with this route, all you need is a url or music id.

**URL** : `/api/spotify/download`

**Method** : `POST`

**Auth required** : NO

**Permissions required** : None

**Data constraints**

Provide a url or music id to get download info.

```json
{
    "url": "music api url or music id"
}
```

**Data example** All fields must be sent.

```json
{
    "url": "https://api.spotify.com/v1/tracks/698ItKASDavgwZ3WjaWjtz"
}
```

```json
{
    "url": "698ItKASDavgwZ3WjaWjtz"
}
```

## Success Response

**Condition** : If everything is OK and download info has result.

**Code** : `200 OK`

**Content example**

```json
{
    "result": {
        "success": true,
        "id": "music id",
        "artists": "music artists",
        "title": "music title",
        "album": "music album",
        "cover": "music cover url",
        "isrc": "NOG841549010",
        "releaseDate": "music release date",
        "link": "music download link"
    }
}
```

## Error Responses

**Condition** : If url has some problems.

**Code** : `400 BAD REQUEST`

**Content**

```json
{
    "message": "error message"
}
```

### Or

**Condition** : If we had some problems in the server.

**Code** : `500 INTERNAL SERVER ERROR`

**Content example**

```json
{
    "message": "An unexpected error occurred. Please try again later."
}
```