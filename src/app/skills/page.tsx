import { Skill } from "@components/Skill";
import { Skill as SkillType} from "@shared/interfaces/Skill.interfaces";
import { useMemo } from "react";
import style from './page.module.css'

const Skills = () => {
    const techSkills: SkillType[] = useMemo(() => {
        return (
            [
                {
                    name: "React"
                },
                {
                    name: "Next.js"
                },
                {
                    name: "TS"
                },
                {
                    name: "SCSS"
                },
                {
                    name: "Nest.js"
                },
                {
                    name: "MongoDB"
                },
                {
                    name: "PostgreSQL"
                },
                {
                    name: "AWS"
                },
                {
                    name: "Docker"
                },
                {
                    name: "WS"
                },
                {
                    name: "Monorepo"
                },
                {
                    name: "Python"
                }
            ]
        )
    }, [])
    return (
        <section className={style.skillsList}>
            {
                techSkills.map((skill: SkillType, index: number) => <Skill key={index} skill={skill} />)
            }
        </section>
    )
}

export default Skills;