import environment from './environmentMaps/space.jpg';

import resumeFont from './fonts/SyneMono-Regular.json';
import appFont from './fonts/SyneMono-Regular.ttf';

import avatar from './model/avatar.glb';
import portfolio from './model/portfolio.glb';

import electronicsTexture from './textures/electronics.jpg';
import furnituresTexture from './textures/furnitures.jpg';
import landscapesTexture from './textures/landscapes.jpg';
import resumeTexture from './textures/resume.jpg';
import rocksTexture from './textures/rocks.jpg';
import settingsTexture from './textures/settings.jpg';

const images = {
  environment
}

const fonts = {
  resumeFont,
  appFont
}

const models = {
  avatar,
  portfolio
}

const textures = {
  electronicsTexture,
  furnituresTexture,
  landscapesTexture,
  resumeTexture,
  rocksTexture,
  settingsTexture
}

export {
  images,
  fonts,
  models,
  textures
}