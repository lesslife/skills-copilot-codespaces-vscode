function skillsMember() {
  return {
    title: 'Member Skills',
    description: 'Skills of a member',
    type: new GraphQLList(skillType),
    resolve: (member) => {
      return member.skills;
    }
  }
}