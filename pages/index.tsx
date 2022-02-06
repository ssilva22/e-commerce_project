
import type { InferGetStaticPropsType } from "next"
import getAllproducts from "@framework/product/get-all-products"
import { getConfig } from "@framework/api/config"
import { Layout } from "@components/common"
import { ProductCard } from "@components/product"
import { Grid, Hero } from "@components/ui"

export async function getStaticProps() {
  const config = getConfig()
  const products = await getAllproducts(config)

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}

export default function Home({
  products
}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
      <Grid>
        { products.slice(0,3).map(product =>
          <ProductCard
            key={product.id}
            product={product}
          />
      )}
      </Grid>
      <Hero headline="Cookies, ice cream and muffins" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione mollitia ab sequi accusantium aperiam. Sunt dolorem cum quod id odit sed mollitia nesciunt animi, nemo itaque accusantium aperiam numquam alias."/>
    </>
  )
}

Home.Layout = Layout

