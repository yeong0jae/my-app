/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/IXqKn1VCKGH
 */

'use client';


import { Badge } from "@/components/ui/badge"
import { MenuIcon } from "lucide-react"
import Slider from "react-slick"; // react-slick 라이브러리에서 Slider 가져오기
import "slick-carousel/slick/slick.css"; // 슬라이더의 기본 스타일
import "slick-carousel/slick/slick-theme.css"; // 슬라이더의 테마 스타일



export function ExComponent() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className=" mx-auto bg-white">
      <header className="flex justify-between py-4 px-6 border-b fixed w-full bg-white top-0 z-50 mx-auto bg-opacity-80">
        <div className="flex items-center space-x-4">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 mr-5 mt-2">Technical1</h1>
            <nav className="hidden lg:flex space-x-5 mt-2">
              <a className="text-gray-600 hover:text-gray-800" href="#">
                여행지
              </a>
              <a className="text-gray-600 hover:text-gray-800" href="#">
                숙소
              </a>
              <a className="text-gray-600 hover:text-gray-800" href="#">
                스토리
              </a>
              <a className="text-gray-600 hover:text-gray-800" href="#">
                축제·공연
              </a>
              <a className="text-gray-600 hover:text-gray-800" href="#">
                여행 일정
              </a>
            </nav>
        </div>
        <div className="flex items-center space-x-4">
          <SearchIcon className="text-gray-600" />
          <GlobeIcon className="text-gray-600" />
          <UserIcon className="text-gray-600" />
        </div>
      </header>
      <Slider {...settings}>
          <div>
            {/* 첫 번째 배너 내용 */}
            <img
              alt="Banner 1"
              className="w-full h-auto"
              src="./image/banner1.png"
            />
          </div>
          <div>
            {/* 두 번째 배너 내용 */}
            <img
              alt="Banner 2"
              className="w-full h-auto"
              src="url_to_banner_image_2"
            />
          </div>
          {/* 추가적인 배너들도 동일한 방식으로 추가 가능 */}
        </Slider>
      <main className="py-12 px-12 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2">
            <div className="mb-4">
              <img
                alt="Diving in Jeju"
                className="w-full h-auto"
                height="400"
                src="./image/DivinginJeju.png"
                style={{
                  aspectRatio: "784/400",
                  objectFit: "cover",
                }}
                width="784"
              />
            </div>
            <h1 className="text-3xl  mb-4">제주 해녀 문화</h1>
            {/* <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">#제휴</Badge>
              <Badge variant="secondary">#해변치힐</Badge>
              <Badge variant="secondary">#해너</Badge>
              <Badge variant="secondary">#이색체험</Badge>
            </div> */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <HeartIcon className="text-gray-600" />
                <span className="text-gray-600">103</span>
                <BookmarkIcon className="text-gray-600" />
                <span className="text-gray-600">34</span>
                <ShareIcon className="text-gray-600" />
                <span className="text-gray-600">7</span>
                <EyeIcon className="text-gray-600" />
                <span className="text-gray-600">242</span>
              </div>
              <div className="flex items-center space-x-2">
                <PrinterIcon className="text-gray-600" />
                <FacebookIcon className="text-gray-600" />
                <TwitterIcon className="text-gray-600" />
                <LinkIcon className="text-gray-600" />
              </div>
            </div>
            <div className="max-w-screen-xl mx-auto bg-white p-6">            
  <div className="my-6">
    <img
      alt="Underwater view in Jeju"
      className="w-full h-auto"
      height="400"
      src="./image/underwater1.png"
      style={{
        aspectRatio: "784/400",
        objectFit: "cover",
      }}
      width="784"
    />
  </div>
  <div className="mb-8">
    <div className="flex items-center space-x-2">
      <MenuIcon className="text-gray-700" />
      <h1 className="text-xl font-bold">요약</h1>
    </div>
    <p className="mt-4 text-gray-800">
      제주도의 여성 공동체에는 최고령이 80대에 이르는 여성들이 생계를 위해 수산물채취를 하고 있고 수심 10m까지
      잠수하여 전통의 나 습득 등 조개류를 채취하는 해녀(海女)가 있다. 바다와 해산물에 대해서 잘 아는 제주 해녀들은
      한번 잠수할 때마다 1분간 소요며 하루에 최대 7시간까지, 연간 90일 정도 잠수를 한다. 해녀들은 물속에서 다시 수면
      위로 떠오를 때 독특한 호흡법 스킬을 낸다. 해녀들은 자마디의 물결 높이에 따라 하늘, 공중, 상공의 세 집단으로
      분류되며 상공 해녀들이 나머지 해녀들을 지도한다. 상공은 고도 제주 해녀 집단의 우두머리로 볼수 있으며 여성의
      영향력이나 권위의 아이콘을 기리며 감사함을 전한다. 관련된 제주도 가정, 학교, 해녀의 어업 관련 단체들은 해녀문화,
      해녀학교와 해녀박물관 등을 통해서 경험 세대로 전승되고 있다. 제주특별자치도 정부에 의해 제주도 해녀 문화의
      정신을 대표하는 캐릭터로 지정된 '제주 해녀 문화'는 공동체 내에서 여성의 지위 향상에 기여해왔으며, 상태 신화적인
      여로 활동 과 공동체에 의한 여성 관리는 신화적적 지속가능성을 높여주었다.
    </p>
  </div>
  <div className="mb-8">
    <div className="flex items-center space-x-2">
      <MenuIcon className="text-gray-700" />
      <h1 className="text-xl font-bold">영문명</h1>
    </div>
    <p className="mt-4 text-gray-800">
      Culture of Jeju Haenyeo(Women Divers)
    </p>
  </div>
  <div className="mb-8">
    <div className="flex items-center space-x-2">
      <MenuIcon className="text-gray-700" />
      <h1 className="text-xl font-bold">무형유산의 의미</h1>
    </div>
    <p className="mt-4 text-gray-800">
      제주도 주민이라면 거의 대부분 가족 중에 해녀가 있기 마련이므로 제주 해녀 문화는 제주도민의 정체성에서 매우 중요한 부분이다. 작은 부표(테왁) 하나에 의지하여 거친 바다 속으로 거침없이 뛰어드는 해녀의 이미지는 제주도민의 정신을 생생하게 보여주는 상징이다. 이런 이유로 제주특별자치도 정부는 해녀를 제주도를 대표하는 캐릭터로 지정하였고 ‘해녀노래’는 많은 제주도민들이 가장 즐기는 노래가 되었다.

제주도는 토양이 비옥하지 않은 화산섬이기 때문에 대규모 농사를 짓기에는 적합하지 않다. 그래서 한때 제주 해녀들은 각 가정에서 가장 중요한 수입원이었다. 한편, 특별히 지정된 일부 바다에서 공동 작업을 해서 얻은 이익으로 공동체 사업의 재원을 마련하기도 했다. 예를 들어 ‘학교 바당’이라 불리는 구역에서 얻은 모든 소득은 공동체 어린이를 위한 초등학교를 짓는 데 사용되었다. 이런 활동은 해녀와 그 공동체가 가진 연대와 조화의 정신을 증명한다.

환경 친화적인 채취 활동에 해당하므로 제주 해녀들의 물질 작업은 지속가능성을 강화한다. 더 많은 해산물을 채취하고자 하는 것이 인간적인 욕심이지만 호흡을 돕는 장비의 도움 없이 물속에서 머무는 개인 능력의 한계 때문에 지나친 욕심을 버려야 하는 자제가 가능하다. 공동체 전체가 해마다 잠수 일 수를 결정하고 작업 시간, 채취할 수 있는 해산물의 최소 크기를 정하며 남획을 방지하기 위해 특정 기술의 사용을 금지하고 있다. 제주 해녀 문화는 자연에 순응하며 삶을 일구는 대표적인 사례이다.
    </p>
  </div>
  <div className="mb-8">
    <div className="flex items-center space-x-2">
      <MenuIcon className="text-gray-700" />
      <h1 className="text-xl font-bold">전승정보</h1>
    </div>
    <p className="mt-4 text-gray-800">
      제주 해녀라고 해서 태어날 때부터 물질에 적합한 특이한 체질을 가지고 태어나는 것이 아니다. 다만 반복된 물질과 훈련을 통해서 강하고 능숙한 해녀로 거듭나는 것이다. 과거 제주도 해안 마을의 소녀들은 ‘애기바당’이라고 부르는 얕은 바다에서 물질을 배우는 것이 매우 자연스러운 일이었다. 그러나 1970년대 이후부터는 해녀의 삶이 더 이상 모든 소녀들이 따라야 할 자연스러운 삶이 아닌 것이 되면서 해녀라는 직업은 고민스런 선택의 문제가 되었다. 그럼에도 불구하고 오늘날 각 마을의 제주 해녀 공동체는 새로운 해녀들을 위한 직업학교의 역할을 하고 있다. 2008년 한 마을의 어촌계가 설립한 해녀학교는 보다 체계적으로 물질 기술을 가르치고 있다.

한 제주 해녀가 강조했듯이 물질 작업은 ‘눈치껏 배우는’ 것이다. 여러 형태의 사냥이나 어로 작업이 흔히 그러하듯이 물질의 경우도 해녀들은 전문가가 되기 위해 반드시 알아야 하는 지식을 명시적으로 밝히지 않을 수 있다. 해녀들이 불을 피워 몸을 덥히는 해안가의 불 턱에서, 또는 해녀들을 위한 현대적인 휴게 시설에서 신참내기 해녀들은 다른 해녀들, 특히 상군 해녀들의 경험을 귀담아들음으로써 필요한 지식을 습득하고 능력을 향상시킬 동기와 책임감을 배운다.

이렇게 물질 기술을 포함한 제주 해녀 문화는 제주 해녀 공동체 안에서 세대를 이어 전승되고 있으며, 각급 학교와 해녀박물관에서도 가르치고 있다.
    </p>
  </div>
  <div>
    <div className="flex items-center space-x-2">
      <MenuIcon className="text-gray-700" />
      <h1 className="text-xl font-bold">본문</h1>
    </div>
    <p className="mt-4 text-gray-800">
      제주도는 한반도 남해 바다의 화산섬으로 인구 약 60만 명이 살고 있다. 제주도의 일부 지형은 2007년 세계자연유산에 등재되었다. 제주 해녀들은 보통 잠수를 할 때마다 1분 정도 숨을 참고 수심 10m 아래 바다로 내려가 해산물을 채취한다. 잠수를 마치고 수면에 떠올라 숨을 내뱉을 때는 매우 특이한 소리를 내는데 이를 ‘숨비소리’라고 한다. 해녀는 여름철에는 하루 6~7시간, 겨울철에는 하루 4~5시간, 연간 90일 정도 작업한다. 제주 해녀들이 물질을 통해 얻은 소득은 가정 경제에 큰 도움이 된다.

제주 해녀들은 바다 속의 암초와 해산물의 서식처를 포함하여 바다에 관한 인지적 지도를 머릿속에 기억하고 있다. 또한 해당 지역의 조류와 바람에 대한 지식도 풍부하다. 이러한 머릿속 지도와 지식은 저마다 오랜 시간에 걸쳐 반복된 물질을 통해 경험으로 습득된다. 해녀들은 물질을 할 수 있는 날씨인지 아닌지를 공식적인 일기예보보다 물질 경력이 오래된 상군 해녀의 말을 듣고 판단한다.

제주 해녀들은 바다의 여신인 용왕할머니에게 제사(잠수굿)를 지내 바다에서 안전과 풍어를 기원한다. 잠수굿을 지낼 때는 해녀들이 ‘서우젯소리’를 부르기도 한다. 또한 배를 타고 노를 저어 물질을 할 바다로 나갈 때 불렀던 ‘해녀 노래’ 역시 제주 해녀 문화에서 중요한 부분이다.
    </p>
  </div>
  <div>
     <div className="mb-8"></div>
    <div className="flex items-center space-x-2">
      <MenuIcon className="text-gray-700" />
      <h1 className="text-xl font-bold">광고 영상</h1>
    </div>
    <p className="mt-4 text-gray-800">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/2s6F3L1fX7g" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </p>
  </div>
</div>
          </div>
          <div className="col-span-1">
            <div className="sticky top-6">
              <div className="mb-6">
                <h2 className="text-lg font-bold mb-3">소셜 미디어</h2>
                <div className="flex items-center space-x-2">
                  <img
                    src="./image/instagram.png"
                    alt="Instagram"
                    className="h-6 w-6"
                    style={{ backgroundColor: "#FF00C1" }}
                  />
                  <img
                    src="./image/facebook.png"
                    alt="Instagram"
                    className="h-6 w-6"
                    style={{ backgroundColor: "#FF00C1" }}
                  />
                  <img
                    src="./image/twitter.png"
                    alt="Instagram"
                    className="h-6 w-6"
                    style={{ backgroundColor: "#FF00C1" }}
                  />
                </div>
              </div>
              <div className="mb-6">
                <h2 className="text-lg font-bold mb-2">해시태그</h2>
                <img
                  src="./image/hashtag.png"
                  alt="Instagram"
                  className=""
                  style={{ backgroundColor: "#FF00C1" }}
                />
              </div>
              <div className="mb-6">
                <h2 className="text-lg font-bold mb-2">관련 정보</h2>
                <div className="grid grid-cols-2 gap-2">
                  <img
                    alt="Jeju attraction"
                    className="w-full h-auto"
                    height="150"
                    src="./image/Jejuattraction1.png"
                    style={{
                      aspectRatio: "150/150",
                      objectFit: "cover",
                    }}
                    width="150"
                  />
                  <img
                    alt="Jeju attraction"
                    className="w-full h-auto"
                    height="150"
                    src="./image/Jejuattraction2.png"
                    style={{
                      aspectRatio: "150/150",
                      objectFit: "cover",
                    }}
                    width="150"
                  />
                  <img
                    alt="Jeju attraction"
                    className="w-full h-auto"
                    height="150"
                    src="./image/Jejuattraction3.png"
                    style={{
                      aspectRatio: "150/150",
                      objectFit: "cover",
                    }}
                    width="150"
                  />
                  <img
                    alt="Jeju attraction"
                    className="w-full h-auto"
                    height="150"
                    src="./image/Jejuattraction4.png"
                    style={{
                      aspectRatio: "150/150",
                      objectFit: "cover",
                    }}
                    width="150"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-lg font-bold mb-2">주변 정보</h2>
                <div className="space-y-4">
                  <img
                    alt="Nearby place"
                    className="w-full h-auto"
                    height="100"
                    src="./image/Nearbyplace1.png"
                    style={{
                      aspectRatio: "150/100",
                      objectFit: "cover",
                    }}
                    width="150"
                  />
                  <img
                    alt="Nearby place"
                    className="w-full h-auto"
                    height="100"
                    src="./image/Nearbyplace2.png"
                    style={{
                      aspectRatio: "150/100",
                      objectFit: "cover",
                    }}
                    width="150"
                  />
                  <img
                    alt="Nearby place"
                    className="w-full h-auto"
                    height="100"
                    src="./image/Nearbyplace3.png"
                    style={{
                      aspectRatio: "150/100",
                      objectFit: "cover",
                    }}
                    width="150"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}


function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function GlobeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}


function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function HeartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function BookmarkIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  )
}


function ShareIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}


function EyeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function PrinterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 6 2 18 2 18 9" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect width="12" height="8" x="6" y="14" />
    </svg>
  )
}


function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function LinkIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}
