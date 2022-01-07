import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';


export function Counter() {
  const [Like, setLike] = useState(0);
  const [disLike, setdisLike] = useState(0);
  return (
    <div>  
      <IconButton style={{width:"80px"}} onClick={() => {setLike(Like + 1);}} aria-label="like movie">
      <Badge badgeContent={Like} color="primary">
  👍
</Badge>
      </IconButton>
      <IconButton style={{width:"80px"}} onClick={() => {setdisLike(disLike + 1);}} aria-label="dislike movie">
      <Badge badgeContent={disLike} color="error">
  👎
</Badge>
      </IconButton>
    </div>
  );
}
