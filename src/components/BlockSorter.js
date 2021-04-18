import React from 'react';
import BlockColumns from './Blocks/BlockColumns';
import ContactForm from './Blocks/ContactForm';
import IconBlocks from './Blocks/IconBlocks';
import ImageText from './Blocks/ImageText';
import PortfolioItem from './Blocks/PortfolioItem';
import Services from './Blocks/Services';
import Testimonial from './Blocks/Testimonial';

function BlockSorter({ block })
{
  switch (block.__typename)
  {
    case "ContentfulTextImage":
      return <ImageText {...block} />

    case "ContentfulServiceBlock":
      return <Services  {...block} />

    case "ContentfulBlockColumns":
      return <BlockColumns  {...block} />

    case "ContentfulContactForm":
      return <ContactForm  {...block} />

    case "ContentfulIconBlock":
      return <IconBlocks  {...block} />

    case "ContentfulPortfolioItem":
      return <PortfolioItem  {...block} />

    case "ContentfulTestimonial":
      return <Testimonial  {...block} />

    default:
      return <p>Block not rendered</p>
  }
}

export default BlockSorter;