// linking react
import React from 'react';
// linking nav component
import Nav from './componets/Nav';
// linking about component
import About from './componets/About';
// linking gallery component
import Gallery from "./components/Gallery";
// linking contact form
import ContactForm from "./components/Contact";


function App() {
  // lifted categories
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

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
          <ContactForm></ContactForm>
          <Gallery currentCategory={currentCategory}></Gallery>
          <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;