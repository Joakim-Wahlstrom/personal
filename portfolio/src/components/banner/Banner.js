import './Banner.css';

const Banner = ({children, dark}) => {
  return (
    <div className={"banner " + (dark? 'dark': '')}>
      {children}
    </div>
  )
}

export default Banner
