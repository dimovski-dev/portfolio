import {Skill as SkillType} from '@shared/interfaces/Skill.interfaces'

import style from './styles.module.css'

interface SkillProps {
    skill: SkillType;
}

export const Skill = ({skill}: SkillProps) => {
    return (
        <div className={style.skillWrapper}><p className={style.skillName}>{skill.name}</p></div>
    )
}