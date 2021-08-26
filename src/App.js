import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        currentCategory={currentCategory}
      
      ></Nav>
      <main>
        {!contactSelected ? ( //The shorthand condition is called a ternary operator, identified with the ? and : symbols. The ternary operator is a popular pattern in React to enable conditional rendering, similar to how we used the && operator as a short circuit. With the ternary, though, we supply the false condition to render as well.
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <Contact/>
        )}
      </main>
    </div>
  );
}

export default App;
