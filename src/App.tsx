import CustomColumn from './components/CustomColumn'
import CustomDivider from './components/CustomDivider'

import Profile from './maincomponents/Profile'
import GitButton from './maincomponents/GitButton'
import TistoryButton from './maincomponents/TistoryButton'
import MobileButton from './maincomponents/MobileButton'
import WebButton from './maincomponents/WebButton'
import FreeButton from './maincomponents/FreeButton'
import OddButton from './maincomponents/OddButton'
import BlogButton from './maincomponents/BlogButton'
import Footer from './maincomponents/Footer'
import CustomRow from './components/CustomRow'
import CustomFont from './components/CustomFont'
import NoteBook from './components/LottieNoteBook'
import CustomBox from './components/CustomBox'

function App() {

  return (
    <CustomColumn $width='100%' $minHeight='100vh' $alignitems='center' $justifycontent='center' $gap='7rem'>

      <CustomColumn $width='100%' $height='auto' $alignitems='center' $justifycontent='center' $gap='10rem'>
        <Profile />

        <CustomColumn $width='100%' $height='auto' $alignitems='center' $justifycontent='center' $gap='0'>
          <CustomColumn $width='100%' $height='auto' $alignitems='center' $justifycontent='center' $gap='2rem'>
            <CustomRow $width='100%' $height='auto' $alignitems='center' $justifycontent='center' $gap='1rem'>
              <CustomDivider $width='10%' $height='0.5px' $backgroundcolor='#D9D9D9' />
              <CustomRow $width='auto' $gap='0.2rem'>
                <CustomFont $color='#666666' $font='0.8rem' $fontweight='bold'>{`<Portfolio`}</CustomFont>
                <CustomFont $color='#D9D9D9' $font='0.8rem' $fontweight='bold'>{`$say="읽어주셔서 감사합니다."`}</CustomFont>
                <CustomFont $color='#666666' $font='0.8rem' $fontweight='bold'>{`>`}</CustomFont>
              </CustomRow>
              <CustomDivider $width='10%' $height='0.5px' $backgroundcolor='#D9D9D9' />
            </CustomRow>
            <GitButton />
            <TistoryButton />
            <MobileButton />
            <WebButton />
            <CustomRow $width='100%' $height='auto' $alignitems='center' $justifycontent='center' $gap='1rem'>
              <CustomDivider $width='30%' $height='0.5px' $backgroundcolor='#D9D9D9' />
              <CustomFont $color='#D9D9D9' $font='0.8rem' $fontweight='bold'>{`</Portfolio>`}</CustomFont>
              <CustomDivider $width='30%' $height='0.5px' $backgroundcolor='#D9D9D9' />
            </CustomRow>
          </CustomColumn>

          <CustomRow $width='100%' $gap='1rem'>
            <CustomBox $backgroundcolor='transparent' $width='50%' $height='auto' $padding='0'>
              <NoteBook />
            </CustomBox>
            <CustomRow $width='50%' $alignitems='center' $justifycontent='flex-start'>
              <CustomFont $color='blue' $font='0.5rem'>console.log("생각은 나의 힘.");</CustomFont>
            </CustomRow>
          </CustomRow>

          <CustomColumn $width='100%' $height='auto' $alignitems='center' $justifycontent='center' $gap='2rem'>
            <CustomRow $width='100%' $height='auto' $alignitems='center' $justifycontent='center' $gap='1rem'>
              <CustomDivider $width='10%' $height='1px' $backgroundcolor='#D9D9D9' />
              <CustomRow $width='auto' $gap='0.2rem'>
                <CustomFont $color='#666666' $font='0.8rem' $fontweight='bold'>{`<NonPortfolio`}</CustomFont>
                <CustomFont $color='#D9D9D9' $font='0.8rem' $fontweight='bold'>{`$say="항상 행복하세요."`}</CustomFont>
                <CustomFont $color='#666666' $font='0.8rem' $fontweight='bold'>{`>`}</CustomFont>
              </CustomRow>
              <CustomDivider $width='10%' $height='1px' $backgroundcolor='#D9D9D9' />
            </CustomRow>
            <FreeButton />
            <OddButton />
            <BlogButton />
            <CustomRow $width='100%' $height='auto' $alignitems='center' $justifycontent='center' $gap='1rem'>
              <CustomDivider $width='30%' $height='0.5px' $backgroundcolor='#D9D9D9' />
              <CustomFont $color='#D9D9D9' $font='0.8rem' $fontweight='bold'>{`</NonPortfolio>`}</CustomFont>
              <CustomDivider $width='30%' $height='0.5px' $backgroundcolor='#D9D9D9' />
            </CustomRow>
          </CustomColumn>
        </CustomColumn>

      </CustomColumn>

      <Footer />
    </CustomColumn>
  )
}

export default App
