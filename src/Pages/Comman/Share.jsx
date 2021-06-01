import React from 'react';
import { FacebookShareButton, FacebookIcon } from 'react-share';

function Share() {
  const handelFb = () => {
    console.log('INSIDE FB');
  };
  return (
    <>
      <FacebookShareButton
        url={`https://shoes4usrohan.netlify.app`}
        quote={'Share news, Aware to Everyone'}
        hashtag='#News'
        onClick={handelFb}
      >
        <FacebookIcon size={36} />
      </FacebookShareButton>
    </>
  );
}

export { Share };
