# BeatHub Design Document

## Data Relationships
- Artist: Parent entity
- Album: References Artist
- Song: References Album and Artist
- User: Independent entity
- Playlist: References User and contains Song references

## Design Decisions

### Why did you reference Songs in the Playlist instead of embedding them?
Referencing avoids data duplication. If a song’s title or duration changes, all playlists automatically reflect the update. Embedding would require updating every playlist document.

### Why did you reference the Artist in the Song model?
This allows faster queries such as finding all songs by a specific artist without first querying albums, improving performance and flexibility.
