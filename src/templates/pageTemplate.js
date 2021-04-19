import { Container, Flex, Heading } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import React from 'react';
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import BlockSorter from '../components/BlockSorter';
import Seo from '../components/seo'

function PageTemplate({ data })
{
  return (

    <Container my="16">
      <Seo title={data.contentfulPage.title} />
      <Heading fontSize="6xl" textAlign="center" textTransform="uppercase">{data.contentfulPage.title}</Heading>
      {renderRichText(data.contentfulPage.body, {
        renderNode: {
          [BLOCKS.EMBEDDED_ENTRY]: node => (
            <Flex pos="relative" w="100vw" left="50%" right="50%" ml="-50vw" mr="-50vw" justify="center">
              <BlockSorter block={node.data.target} />
            </Flex>
          )
        }
      })}
    </Container>

  );
}

export default PageTemplate;

export const query = graphql`query pageQuery($slug: String) {
  contentfulPage(slug: {eq: $slug}) {
    title
    body {
      raw
      references {
        __typename
        ... on ContentfulContactForm {
          contentful_id
        }
        ... on ContentfulCta {
          contentful_id
          buttonText
          pageRef {
            slug
          }
        }
        ... on ContentfulServiceBlock {
          contentful_id
          services {
            title
            description {
              raw
            }
            contentful_id
          }
        }
        ... on ContentfulIconBlock {
          name
          icon {
            gatsbyImageData(placeholder: BLURRED)
            title
            contentful_id
          }
          contentful_id
        }
        ... on ContentfulTextImage {
          contentful_id
          text {
            raw
          }
          image {
            gatsbyImageData(placeholder: BLURRED)
          }
          imageLeft
        }
        ... on ContentfulBlockColumns {
          name
          maxColumns
          items {
            __typename
            ... on ContentfulTestimonial {
              contentful_id
              jobTitle
              testimonial {
                raw
              }
              author
              link
            }
            ... on ContentfulPortfolioItem {
              contentful_id
              title
              tagline
              technologies {
                title
                color
                color2
                color3
                textColor
                contentful_id
              }
              link
              description {
                raw
              }
            }
          }
          contentful_id
        }
      }
    }
  }
}`