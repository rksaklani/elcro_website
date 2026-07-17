import { ImageResponse } from 'next/og'
import { baseUrl } from '../sitemap'

export function GET(request: Request) {
  let url = new URL(request.url)
  // console.log(url)
  let title = url.searchParams.get('title') ?? ''
  let description = url.searchParams.get('description') ?? ''


  return new ImageResponse(
    (
      <div tw="flex flex-row w-full h-full items-center justify-start px-[100px] bg-[#07090f] text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" tw='h-[260px] w-[260px] mr-[70px] rounded-[48px]' src={`${baseUrl}/elcro/icon.png`} />

        <div tw="flex flex-col w-[620px]">
          <h2 tw="text-8xl font-bold tracking-tight text-left">{title}</h2>
          <p tw='text-[#9aa4b5] text-4xl'>{description}</p>
        </div>

      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
