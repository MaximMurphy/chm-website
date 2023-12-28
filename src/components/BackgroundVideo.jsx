export default function BackgroundVideo() {
  return (
    <video
      src="/MVT_video.mp4"
      autoPlay
      muted
      loop
      quality={100}
      className="object-cover w-full h-full -z-10"
    ></video>
  );
}
