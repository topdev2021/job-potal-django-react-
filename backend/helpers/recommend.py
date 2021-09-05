import collections
from accounts.models import UserAccount
from jobs.models import Job, Skills
from profiles.models import UserSkills, Availability


def get_recommend_users(job_id):
    """
    get recommend developer list
    Params: job_id
    Return: rated_users
    """
    job = Job.objects.get(id=job_id)
    skills = Skills.objects.filter(job=job).all()
    users = UserAccount.objects.filter(type='user').all()
    rated_users = []
    for user in users:
        rated_user = collections.OrderedDict()
        rated_user['id'] = user.id
        rated_user['email'] = user.email
        rated_user['name'] = user.name
        rated_user['rate'] = get_user_score(user, job, skills)
        if rated_user['rate'] > 0:
            rated_users.append(rated_user)
    rated_users.sort(key=sort_rate, reverse=True)
    return rated_users


def sort_rate(val):
    return val['rate']


def get_user_score(user, job, skills):
    """
    Calculating score of developer
    Params: user, job, skills
    Return: Score
    """
    score = 0
    weight = 100/(len(skills))
    for skill in skills:
        user_skill = UserSkills.objects.filter(user=user, name=skill.name).first()
        if user_skill:
            diff = 1 - abs(user_skill.rating - skill.rating)/10
            score = score + weight * diff
    availability = Availability.objects.filter(user=user).first()
    if score:
        if availability and job.hiring_needs != availability.availability_type:
            score = score * 8/10
    return int(score)
