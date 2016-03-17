# NBA shot zones
Compute shot zones from x,y coordindates

## Usage
```javascript
import { getZoneNames, getZoneFromShot } from 'nba-shot-zones'

const zones = getZoneNames() // ['restricted area', 'low post'...]

const zone = getZoneFromShot({ x: -18.5, y: 13.2 }) // 'midrange (upper left)'

```

