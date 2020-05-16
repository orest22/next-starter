import * as React from 'react';

import Layout from 'components/Layout'
import Link from 'next/link'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About us</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
