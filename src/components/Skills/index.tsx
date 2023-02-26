import { ListSkills, MySkills, SkillsContainer } from './styled'
import { firstSkills, secondSkills } from '../../utils/data'

export function Skills() {
  const firstSkill = firstSkills.map((skill) => skill)
  const secondSkill = secondSkills.map((skill) => skill)

  return (
    <SkillsContainer id="skills">
      <MySkills>
        <div>
          <h1>Skills</h1>
        </div>

        <ul>
          <ListSkills>
            {firstSkill.map((skill) => {
              return <li key={skill.id}>{skill.skill}</li>
            })}
          </ListSkills>
          <ListSkills>
            {secondSkill.map((skill) => {
              return <li key={skill.id}>{skill.skill}</li>
            })}
          </ListSkills>
        </ul>
      </MySkills>
    </SkillsContainer>
  )
}
