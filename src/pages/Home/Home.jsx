import './Home.scss';

import DefaultTitle from '../../components/Default/DefaultTitle/DefaultTitle';
import FormCreateEmployee from '../../components/Form/FormCreateEmployee/FormCreateEmployee';

const Home = () => {
  return (
    <section>
      <div className="home">
        <div className="home__title">
          <DefaultTitle title="Create Employee" />
        </div>
        <div className="home__form">
          <FormCreateEmployee />
        </div>
      </div>
    </section>
  );
};

export default Home;
