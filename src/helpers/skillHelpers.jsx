import skills from 'assets/skills';

export const assignClassSkills = ( classSkills ) => {
    let assignedSkills = JSON.parse(JSON.stringify(skills));
    classSkills.map(skill => {
        if (skill in assignedSkills['knowledge']) {
            return assignedSkills['knowledge'][skill].classSkill = true
        } else {
            return assignedSkills[skill].classSkill = true
        }
    })
    return assignedSkills
  }