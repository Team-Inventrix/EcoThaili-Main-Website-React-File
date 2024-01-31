import ecoThaili_logo from '../../image/logo/ecoThaili-color-logo.png'
import ecoThaili_SDG from '../../image/logo/linearSDG.png'

// Navigation item title and its link 
const navigation_items = {
    'Our Story'             :   '/#ourStory',
    'Problem We Are Solving':   '/#problemWeAreSolving',
    'Material Composition'  :   '/#materialComposition',
    'Our Impact'            :   '/#ourImpact',
    'Product'               :   '/#product',
    'FAQ'                   :   '/#faq',
    'About'                 :   '/#about',
}

// Navigation logo and its alternative text
const navigation_logos = {
    'product logo': {
        src                 :   ecoThaili_logo,
        alt                 :   'EcoThaili Logo'
    },
    'product sdg': {
        src                 :   ecoThaili_SDG,
        alt                 :   'SDG 11, SDG 12, SDG 13, SDG 15 logo in linear'
    }
}
export {navigation_items, navigation_logos}