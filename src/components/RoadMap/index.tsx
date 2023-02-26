import { Bulletede, Informs, RoadMapContainer, RoadMapInformas } from './styled'
import { roadMap } from '../../utils/data'
import calendar from '../../assets/calendar.svg'

export function RoadMap() {
  const listExperience = roadMap.map((experience) => experience)

  return (
    <RoadMapContainer>
      <RoadMapInformas id="experience">
        <div>
          <h1>RoadMap</h1>
        </div>

        <ul>
          {listExperience.map((item) => {
            return (
              <li key={item.id}>
                <div>
                  <Bulletede></Bulletede>
                </div>
                <Informs>
                  <h3>{item.institution}</h3>

                  <span>
                    <img src={calendar} alt="" />
                    {item.date}
                  </span>

                  <p>{item.description}</p>
                </Informs>
              </li>
            )
          })}
        </ul>
      </RoadMapInformas>
    </RoadMapContainer>
  )
}
