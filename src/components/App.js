import React from "react";
import Button from "./Button";
import Card from "./Card";
import Navigation from "./Navigation";

const App = () => {
  const Heading4 = (props) => {
    return (
      <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
        {props.heading}
      </h4>
    );
  };
  return (
    <div className="text-gray-600 font-nunito">
      <div className="grid md:grid-cols-3">
        <div className="md:col-span-1 md:flex md:justify-end">
          <Navigation />
        </div>

        <main className="px-16 py-6 bg-gray-100 md:col-span-2">
          <div className="flex justify-center md:justify-end">
            <Button btnText="Login" />
            <Button btnText="Sign Up" />
          </div>
          <header>
            <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
            <h3 className="text-2xl font-semibold">For Foodies</h3>
          </header>
          <div>
            <Heading4 heading="Latest Recipes" />
            <div className="mt-8 grid lg:grid-cols-3 gap-10">
              <Card
                title="5 Bean chilli Spew"
                cook="Mario"
                time="25"
                img={"./img/stew.jpg"}
              />
              <Card
                title="Home Noodles"
                cook="Mario"
                time="12"
                img={"./img/noodle.jpg"}
              />
              <Card
                title="Tofu curry"
                cook="Mario"
                time="20"
                img={"./img/curry.jpg"}
              />
            </div>
            <Heading4 heading="Popular Recipes" />
            <div className="mt-8 grid lg:grid-cols-3 gap-10">
              <Card
                title="Tofu curry"
                cook="Mario"
                time="20"
                img={"./img/curry.jpg"}
              />

              <Card
                title="5 Bean chilli Spew"
                cook="Mario"
                time="25"
                img={"./img/stew.jpg"}
              />
              <Card
                title="Home Noodles"
                cook="Mario"
                time="12"
                img={"./img/noodle.jpg"}
              />
            </div>
            <div class="mt-8 flex justify-center">
              <div
                class="bg-secondary-100 text-secondary-200 rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider hover:shadow-inner transform hover:scale-125
                     transition ease-out duration-300 hover:bg-opacity-50"
              >
                Load more
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
