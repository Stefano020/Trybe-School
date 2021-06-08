def study_schedule(start_time, end_time, target_time):

    qty_students_most_common_time = 0

    for student_start_time, student_end_time in zip(start_time, end_time):
        if student_start_time <= target_time <= student_end_time:
            qty_students_most_common_time += 1

    return qty_students_most_common_time
