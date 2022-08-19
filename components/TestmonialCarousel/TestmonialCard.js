export function TestmonialCard({ testmonial }) {
  return (
    <div className="flex flex-col items-center mx-5 mt-10 justify-center bg-Vary-Light-Gray">
      <img
        className="w-20 -translate-y-1/2 z-10"
        src={testmonial.image}
        alt="avatar image"
      />
      <p className="font-bold">{testmonial.name}</p>
      <p className="text-sm text-center p-8 leading-loose text-Dark-Grayish-Blue">
        {testmonial.content}
      </p>
    </div>
  )
}
