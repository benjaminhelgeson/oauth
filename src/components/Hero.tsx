const Hero = ({ title = 'Greetings', subtitle = 'Nice to see you' }) => {
    return (
        <div className="text-5xl">
            <div className="text-center pt-5 w-full">
                {title}
            </div>
            <div className="text-center p-1 w-full text-sm">
                {subtitle}
            </div>
        </div>
    );
  }
  
  export default Hero