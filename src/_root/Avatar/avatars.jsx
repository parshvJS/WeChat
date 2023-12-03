import React, { useEffect, useState } from 'react';
import Avatar from 'avataaars';

const AvatarCustomization = ({ gettingUrl }) => {
  const [randomFeatures, setRandomFeatures] = useState({});
  const [change, setChange] = useState();
  const [url, setUrl] = useState('');
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedStyles, setSelectedStyles] = useState({});

  const customizationOptions = {
    accessoriesType: ['Blank', 'Prescription02', 'Round', 'Sunglasses'],
    avatarStyle: ['Circle', 'Transparent'],
    clotheColor: ['Black', 'Blue01', 'Blue02', 'Gray01', 'Gray02', 'Heather', 'PastelBlue', 'PastelGreen', 'PastelOrange', 'PastelRed', 'PastelYellow', 'Pink', 'Red', 'White'],
    clotheType: ['BlazerShirt', 'BlazerSweater', 'CollarSweater', 'GraphicShirt', 'Hoodie', 'Overall', 'ShirtCrewNeck', 'ShirtScoopNeck', 'ShirtVNeck'],
    eyeType: ['Close', 'Cry', 'Default', 'Dizzy', 'EyeRoll', 'Happy', 'Hearts', 'Squint', 'Surprised', 'Wink'],
    eyebrowType: ['Angry', 'Default', 'FlatNatural', 'RaisedExcited', 'SadConcerned', 'UnibrowNatural', 'UpDown'],
    facialHairType: ['BeardMedium', 'BeardLight', 'BeardMagestic', 'MoustacheFancy', 'MoustacheMagnum'],
    facialHairColor: ['Auburn', 'Black', 'Blonde', 'Brown', 'BrownDark', 'Platinum', 'Red'],
    hairColor: ['Auburn', 'Black', 'Blonde', 'Brown', 'BrownDark', 'PastelPink', 'Platinum', 'Red'],
    hatColor: ['Black', 'Blue01', 'Blue02', 'Gray01', 'Gray02', 'Heather', 'PastelBlue', 'PastelGreen', 'PastelOrange', 'PastelRed', 'PastelYellow', 'Pink', 'Red', 'White'],
    hatType: ['WinterHat1', 'WinterHat2', 'WinterHat3', 'WinterHat4'],
    mouthType: ['Concerned', 'Default', 'Disbelief', 'Eating', 'Grimace', 'Sad', 'ScreamOpen', 'Serious', 'Smile', 'Tongue', 'Twinkle'],
    skinColor: ['Tanned', 'Yellow', 'Pale', 'Light', 'Brown', 'DarkBrown', 'Black'],
    topType: ['NoHair', 'Eyepatch', 'Hat', 'LongHairBigHair', 'LongHairBob', 'LongHairBun', 'LongHairCurly', 'LongHairCurvy', 'LongHairDreads', 'LongHairFrida', 'LongHairFro', 'LongHairFroBand', 'LongHairNotTooLong', 'LongHairShavedSides', 'LongHairMiaWallace', 'LongHairStraight', 'LongHairStraight2', 'LongHairStraightStrand', 'ShortHairDreads01', 'ShortHairDreads02', 'ShortHairFrizzle', 'ShortHairShaggyMullet', 'ShortHairShortCurly', 'ShortHairShortFlat', 'ShortHairShortRound', 'ShortHairShortWaved', 'ShortHairSides', 'ShortHairTheCaesar', 'ShortHairTheCaesarSidePart'],
  };

  const renderTags = () => {
    return Object.keys(customizationOptions).map((category) => (
      <div key={category}>
        <p className='text-lg m-1 font-semibold'>{category}</p>
        <div className='flex flex-wrap'>
          {customizationOptions[category].map((tag) => (
            <button
              key={tag}
              className={`mr-2 mb-2 px-3 py-1 border rounded ${selectedStyles[category] === tag ? 'bg-blue-500 text-white' : 'border-gray-300'}`}
              onClick={() => {
                event.stopPropagation()
                event.preventDefault()
                selectAvatarStyle(category, tag);
                setRandomFeatures({
                  ...randomFeatures,
                  [category]: tag,
                });
                return false
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    ));
  };

  const selectAvatarStyle = (category, tag) => {
    setSelectedStyles((prevSelectedStyles) => ({
      ...prevSelectedStyles,
      [category]: tag,
    }));

    setRandomFeatures((prevRandomFeatures) => ({
      ...prevRandomFeatures,
      [category]: tag,
    }));
  };


useEffect(()=>{
  const newFeature = {
    accessoriesType: customizationOptions.accessoriesType[Math.floor(Math.random() * customizationOptions.accessoriesType.length)],
    avatarStyle: customizationOptions.avatarStyle[Math.floor(Math.random() * customizationOptions.avatarStyle.length)],
    clotheColor: customizationOptions.clotheColor[Math.floor(Math.random() * customizationOptions.clotheColor.length)],
    clotheType: customizationOptions.clotheType[Math.floor(Math.random() * customizationOptions.clotheType.length)],
    eyeType: customizationOptions.eyeType[Math.floor(Math.random() * customizationOptions.eyeType.length)],
    eyebrowType: customizationOptions.eyebrowType[Math.floor(Math.random() * customizationOptions.eyebrowType.length)],
    facialHairColor: customizationOptions.facialHairColor[Math.floor(Math.random() * customizationOptions.facialHairColor.length)],
    facialHairType: customizationOptions.facialHairType[Math.floor(Math.random() * customizationOptions.facialHairType.length)],
    hairColor: customizationOptions.hairColor[Math.floor(Math.random() * customizationOptions.hairColor.length)],
    hatColor: customizationOptions.hatColor[Math.floor(Math.random() * customizationOptions.hatColor.length)],
    hatType: customizationOptions.hatType[Math.floor(Math.random() * customizationOptions.hatType.length)],
    mouthType: customizationOptions.mouthType[Math.floor(Math.random() * customizationOptions.mouthType.length)],
    skinColor: customizationOptions.skinColor[Math.floor(Math.random() * customizationOptions.skinColor.length)],
    topType: customizationOptions.topType[Math.floor(Math.random() * customizationOptions.topType.length)],
  }
  console.log('feature :', randomFeatures)
  const url = `https://avataaars.io/?avatarStyle=${newFeature.avatarStyle}&topType=${newFeature.topType}&accessoriesType=${newFeature.accessoriesType}&hairColor=${newFeature.hairColor}&facialHairType=${newFeature.facialHairType}&facialHairColor=${randomFeatures.facialHairColor}&clotheType=${randomFeatures.clotheType}&clotheColor=${newFeature.clotheColor}&eyeType=${newFeature.eyeType}&eyebrowType=${newFeature.eyebrowType}&mouthType=${newFeature.mouthType}&skinColor=${newFeature.skinColor}`;
  gettingUrl(url);
  setRandomFeatures(newFeature);
  setUrl(url);
},[])


  return (
    <div className='flex items-center justify-center flex-col border'>
      <Avatar style={{ width: '100px', height: '100px' }} {...randomFeatures} />
      <div className='flex justify-center'>
        <div>
          <button type='button' className='bg-black text-center text-gray-50 p-2 rounded-lg m-4' onClick={() => {
            setUrl(() => {
              const newFeature = {
                accessoriesType: customizationOptions.accessoriesType[Math.floor(Math.random() * customizationOptions.accessoriesType.length)],
                avatarStyle: customizationOptions.avatarStyle[Math.floor(Math.random() * customizationOptions.avatarStyle.length)],
                clotheColor: customizationOptions.clotheColor[Math.floor(Math.random() * customizationOptions.clotheColor.length)],
                clotheType: customizationOptions.clotheType[Math.floor(Math.random() * customizationOptions.clotheType.length)],
                eyeType: customizationOptions.eyeType[Math.floor(Math.random() * customizationOptions.eyeType.length)],
                eyebrowType: customizationOptions.eyebrowType[Math.floor(Math.random() * customizationOptions.eyebrowType.length)],
                facialHairColor: customizationOptions.facialHairColor[Math.floor(Math.random() * customizationOptions.facialHairColor.length)],
                facialHairType: customizationOptions.facialHairType[Math.floor(Math.random() * customizationOptions.facialHairType.length)],
                hairColor: customizationOptions.hairColor[Math.floor(Math.random() * customizationOptions.hairColor.length)],
                hatColor: customizationOptions.hatColor[Math.floor(Math.random() * customizationOptions.hatColor.length)],
                hatType: customizationOptions.hatType[Math.floor(Math.random() * customizationOptions.hatType.length)],
                mouthType: customizationOptions.mouthType[Math.floor(Math.random() * customizationOptions.mouthType.length)],
                skinColor: customizationOptions.skinColor[Math.floor(Math.random() * customizationOptions.skinColor.length)],
                topType: customizationOptions.topType[Math.floor(Math.random() * customizationOptions.topType.length)],
              }
              console.log('feature :', randomFeatures)
              const url = `https://avataaars.io/?avatarStyle=${newFeature.avatarStyle}&topType=${newFeature.topType}&accessoriesType=${newFeature.accessoriesType}&hairColor=${newFeature.hairColor}&facialHairType=${newFeature.facialHairType}&facialHairColor=${randomFeatures.facialHairColor}&clotheType=${randomFeatures.clotheType}&clotheColor=${newFeature.clotheColor}&eyeType=${newFeature.eyeType}&eyebrowType=${newFeature.eyebrowType}&mouthType=${newFeature.mouthType}&skinColor=${newFeature.skinColor}`;
              gettingUrl(url);
              setRandomFeatures(newFeature);
              return url;
            });
          }}>
            Random
          </button>
          <button
          type='button'
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-500"
            onClick={(event) => {
              event.stopPropagation()
              event.preventDefault()
              setPopupOpen(true);
              return false;
            }}
          >
            Customize
          </button>
        </div>

        {isPopupOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black opacity-50" onClick={() => setPopupOpen(false)}></div>
            <div className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] relative rounded-lg bg-white p-6 shadow-lg">
              <div className="flex justify-between items-center mb-2">
                <div className='flex justify-center items-center flex-1 '>
                  <div className="text-xl mr-4 font-bold">Create Your Avatar</div>
                  <button className="text-gray-500 hover:text-gray-700" onClick={() => setPopupOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                      <path d="M0 0h16v16H0z" fill="none" />
                      <path d="M10.742 8l3.28-3.28a1 1 0 0 0-1.415-1.414L9.327 6.586 5.047 2.304a1 1 0 0 0-1.415 1.415l4.28 4.282-4.282 4.28a1 1 0 0 0 1.415 1.415l4.282-4.282 4.282 4.282a1 1 0 0 0 1.415-1.415l-4.282-4.282L14.742 8h-4z" />
                    </svg>
                  </button>
                </div>

              </div>
              <div className='flex flex-col justify-center items-center'>
                {/* Your existing Avatar component */}
                <div className=''>
                  <p className='text-lg m-1 font-semibold text-center'>Styles</p>
                  <div className='flex justify-center items-center'>
                    <Avatar
                      style={{ width: '100px', height: '100px' }}
                      {...randomFeatures}
                    />
                  </div>
                  <div className='flex flex-col max-w-xl max-h-80 lg:max-h-[30rem] overflow-scroll'>
                    {renderTags()}
                  </div>
                </div>
              </div>
            </div>          </div>
        )}
      </div>
    </div>
  );
};

export default AvatarCustomization;
