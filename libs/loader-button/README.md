
# React Loader Button
A simple loader button that can be used as a loading button and regular button with some additional capabilities and all native button functionalities.

## Installation

Install using NPM or YARN

```bash
npm install @fazin/loader-button
```
Or
```bash
yarn add @fazin/loader-button
```
    
## Props

| Name              | Usage    |Value Type                      |
| ----------------- | -------- | ------------------------------ |
| label             | Required | string                         |
| loading           | Optional | boolean                        |
| loadingSpinnerPos | Optional | 'left' or 'right'              |
| altText           | Optional | string                         |
| keepText          | Optional | boolean                        |
| spinnerStyle      | Optional | React.CSSProperties            |
| spinnerClassName  | Optional | string                         |
| icon              | Optional | HTMLElement or React.ReactNode |
| iconPos           | Optional | 'left' or 'right'              |



```jsx
import {LoaderButton} from '@fazin/loader-button'
function App() {
    const loadingState = true;
  return (
    <div>
    //Simple Button
     <LoaderButton  
        label='Click Me' 
        onClick={()=>console.log('clicked')}
    />
    //loading button 
     <LoaderButton  
        label='Click Me' 
        loading={loadingState} 
    />
    //loadingSpinnerPos - will change the position of loader to either left or right
     <LoaderButton  
        label='Click Me' 
        loading={loadingState} 
        loadingSpinnerPos={'left'}
    />
    //altText - alternate text => display some other text while loading
     <LoaderButton  
        label='Click Me' 
        loading={loadingState}
        altText={'wait while loading...'} 
        onClick={()=>console.log('clicked')}
    />
    //keepText - keep text with spinner
     <LoaderButton  
        label='Click Me' 
        loading={loadingState} 
        keepText
    />
    //spinnerStyle - style spinner with css
    <LoaderButton  
        label='Click Me' 
        loading={loadingState} 
        spinnerStyle={{borderTop: 'blue'}}
    />
    //spinnerClassName - style spinner with css
    <LoaderButton  
        label='Click Me' 
        loading={loadingState} 
        spinnerClassName={'my-class-name'}
    />
    //icon - JSX or HTML 
    <LoaderButton  
        label='Click Me' 
        loading={loadingState} 
        icon={<i className='fa fa-mouse' ></i>}
    />
    //iconPos -  will change the position of icon to either left or right
    <LoaderButton  
        label='Click Me' 
        loading={loadingState} 
        icon={<i className='fa fa-mouse' ></i>}
        iconPos={'right'}
    />
    </div>
  );
}
```
# Thanks