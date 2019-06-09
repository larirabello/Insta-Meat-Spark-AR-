// Load in the required modules
const NativeUI = require('NativeUI');
const Scene = require('Scene');
const Textures = require('Textures');
const Materials = require('Materials');

// Locate the plane in the Scene
const trayobj = Scene.root.find('trayobj');

// Locate the textures in the Assets
const texture0 = Textures.get('black');
const texture1 = Textures.get('green');
const texture2 = Textures.get('white');
const texture3 = Textures.get('blue');
const texture4 = Textures.get('orange');

// Set a starting index (optional, will be 0 by default)
const index = 0;

// Create a configuration object
const configuration = {

  // The index of the selected item in the picker
  selectedIndex: index,

  // The image textures to use as the items in the picker
  items: [
    {image_texture: texture0},
    {image_texture: texture1},
    {image_texture: texture2},
    {image_texture: texture3},
    {image_texture: texture4},
  ],

mats: [
    {material: Materials.get("black")},
    {material: Materials.get("green")},
    {material: Materials.get("white")},
    {material: Materials.get("blue")},
    {material: Materials.get("orange")}
  ]

};

const picker = NativeUI.picker;

picker.configure(configuration);
picker.visible = true;

// When the user selects an item form the picker, pass the index
// so we can select the materials to switch out
picker.selectedIndex.monitor().subscribe(function(val) {

    // Set the material to the first rectangle
    trayobj.material = configuration.mats[val.newValue].material;

});