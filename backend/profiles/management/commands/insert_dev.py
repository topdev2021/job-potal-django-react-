from pandas import read_excel
from datetime import datetime
from django.core.management import BaseCommand
from accounts.models import UserAccount
from profiles.models import Profile, Experience, Availability, RoleSalary, Education, UserSkills, Company

class Command(BaseCommand):
    def handle(self, *args, **options):
        excel_data = read_excel('./profiles/management/commands/dev_dataset.xlsx')
        dev_data = excel_data.values.tolist()
        for dev in dev_data:
            first_name = dev[0]
            last_name = dev[1]
            city = dev[2]
            country = dev[3]
            phone = dev[4]
            years_of_experience = dev[5]
            level_of_english = dev[6]
            level_of_education = dev[7]
            university = dev[8]
            start_date = dev[9]
            end_date = dev[10]
            availability = dev[11]
            availability = availability.replace("-", " ")
            tech_stack = dev[12]
            tech_stack_score = dev[13]
            tech_stack_score.replace(' ', '')
            tech_stack_score = int(tech_stack_score.split('-')[1])
            email = "%s@dev.com" % first_name.lower()
            password = 'test1423'
            bio = 'Hello, I am developer, thank for checking my profile'
            user = UserAccount.objects.filter(email=email).first()
            if not user:
                user = UserAccount.objects.create(email=email, name=first_name, type='user')
                user.set_password(password)
                user.save()
            profile = Profile.objects.get_or_create(user=user, first_name=first_name, last_name=last_name, country=country,
                                             phone=phone, bio=bio)
            experience = Experience.objects.get_or_create(user=user, years_of_experience=years_of_experience,
                                                   years_of_remote_experience=years_of_experience,
                                                   english_proficiency=level_of_english)
            availability = Availability.objects.get_or_create(
                user=user, availability_type=availability, ready_to_start_in='now'
            )
            role_salary = RoleSalary.objects.get_or_create(user=user, preferred_role='Fullstack (BE Heavy)',
                                                    current_salary='2000000')
            start_date = datetime.strptime("01/04/%s 00:00:00" % start_date, '%d/%m/%Y %H:%M:%S')

            education = Education.objects.get_or_create(user=user, degree=level_of_education, college=university,
                                                 start_date=start_date, end_date=start_date)

            company = Company.objects.get_or_create(user=user, name='company', about='about', phone='123456789',
                                             address='test address', website='', linkedin_link='linkedin_link',
                                             twitter_link='')
            skill = UserSkills.objects.get_or_create(user=user, name=tech_stack, rating=tech_stack_score)
            print(f'{email} has been created.')

