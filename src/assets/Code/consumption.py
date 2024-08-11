def consumption(self):
        rec_dup = 0
        sent_dup = 0
        power = 0

        last_rec = bytesReceived(rec_dup)
        last_sent = bytesSent(sent_dup)
        last_total = last_rec + last_sent

        bytes_rec = 0
        bytes_sent = 0
        bytes_total = 0

        # always = bytes and add the old data to it
        now_rec = 0
        now_sent = 0
        now_total = 0

        # the previous value of the bytes when bytes == 0 (internet disconnect)
        old_data_rec = 0
        old_data_sent = 0
        old_data_total = 0

        nowr = 0
        pastr = 0
        nows = 0
        pasts = 0
        result_r = 0

        starter = 0
        cyper = 0
        print(f"#######fixed first down {get_size(last_rec)} fixed first upload {get_size(last_sent)} fixed first total{get_size(last_total)}#####")

        with open(files, "a") as wt:
            csv_w = csv.DictWriter(wt,
                                    fieldnames=['downCon', 'uplaodCon', 'totalCon', 'first down', 'first upload',
                                                'first total',
                                                'bytes down', 'bytes up', 'bytes total','debug r', 'debug s','rec_dup','sent_dup','nowr','pastr','result_r','nows','pasts','Start time','End time','cyper','diff', 'old rec', 'old sent',
                                                'hyper', 'segma', 'now down', 'now sent', 'now total'])
            csv_w.writeheader()
            
            last_time = time.time()
            while True:
                cyper = 0
                

                if starter == 1:
                    if ((time.time() - last_time) - start_time) > 50:
                        power = 1
                        cyper = 1

                if power == 1 and (bytesReceived(rec_dup) - bytes_rec) > (bytes_rec / 4):
                    # rec_dup += bytesReceived(rec_dup) - bytes_rec
                    # sent_dup += bytesSent(sent_dup) - bytes_sent
                    nowr = bytesReceived(rec_dup)
                    pastr = bytes_rec
                    result_r = nowr - pastr
                    rec_dup += result_r
                    nows = bytesSent(sent_dup)
                    pasts = bytes_sent
                    result_s = nows - pasts
                    sent_dup += result_s
                    power = 0   

                start_time= time.time() - last_time
                string_start_time=str(start_time).split(".")[0]
                print(start_time,str(start_time).split("."),str(start_time).split(".")[0])
                # debug
                hyper = 0
                segma = 0

                # STEP 1 Code starts firstart_timetime
                # STEP 10 these conditions won't work remember starter = 1 !
                # STEP 26 you know !
                if starter == 0 and bytesReceived(rec_dup) != 0:
                    bytes_rec = bytesReceived(rec_dup)
                    bytes_sent = bytesSent(sent_dup)
                elif starter == 0 and bytesSent(sent_dup) != 0:
                    bytes_sent = bytesSent(sent_dup)
                    bytes_rec = bytesReceived(rec_dup)
                elif starter == 0 and bytesReceived(rec_dup) == 0:
                    bytes_rec = last_rec
                    bytes_sent = last_sent
                elif starter == 0 and bytesSent(sent_dup) == 0:
                    bytes_sent = last_sent
                    bytes_rec = last_rec

                # STEP 11 Here it will add the values but we won't use them
                bytes_total = bytes_rec + bytes_sent

                # STEP 2 make sure that the code will never execute step 1 again
                starter = 1

                # STEP 11 the internet disconnected but bytes_rec and bytes_sent are still the old value for example 50MB
                # STEP 12 add the bytes values to old_data_rec and old_data_sent
                # STEP 19 The internet is not working so add the previous value to old_data but wait it will be duplicated becuase for example + 50 and then again
                # STEP 20 NO ! remember that bytes are assigned to be zero in the previous loop and old data was 50MB in our example so 50 + 0 is the same
                # STEP 27 this time psutil will give the current bytes which will count new values and we don't want to lose them too 18B 24B 100B 1MB .....
                if bytesReceived(rec_dup) < bytes_rec:
                    old_data_rec += bytes_rec
                    rec_dup = 0
                    sent_dup = 0
                    hyper = 1
                if bytesSent(sent_dup) < bytes_sent:
                    old_data_sent += bytes_sent
                    rec_dup = 0
                    sent_dup = 0
                    segma = 1

                

                # STEP 3 these variables are just zero
                # STEP 21 and old values will be added togather after assigning
                old_data_total = old_data_rec + old_data_sent

                # STEP 4 get the current bytes again but why ?
                # STEP 13 the current values which are zeros will be assigned to the bytes variable
                # STEP 22 you can guess the result
                # STEP 28 now we assign the current new values for example bytes_rec = 20B
                # U    P    D    A    T    E    S   T   A   G   E
                bytes_rec = bytesReceived(rec_dup)
                bytes_sent = bytesSent(sent_dup)
                bytes_total = bytes_rec + bytes_sent

                # STEP 5 make new variables with the same value
                # STEP 14 we assign the bytes values to now variables so we can use bytes later to compare and change the now variables value to add them
                # STEP 23 and you can understand now why we didn't change the bytes values in step 24
                # STEP 29 if before it was for example 50MB now bytes - last will be (50MB + 20B) - last so ...
                now_rec = bytes_rec
                now_sent = bytes_sent
                now_total = bytes_total

                # STEP 6 add zeros so the same
                # STEP 15 because internet disconnected and to not lose our consumption we add the old values to the zero variables so they are the same on view (the main con GUI)
                # STEP 24 remember never change bytes value !
                # STEP 30 we add them in now variables but why not bytes
                # STEP 31 please don't ask this question again
                now_rec += old_data_rec
                now_sent += old_data_sent
                now_total += old_data_total

                print(
                    f"-----> new to current second  down {get_size(bytes_rec)} upload {get_size(bytes_sent)}  total{get_size(bytes_total)} old{old_data_rec} hyper{hyper}")
                # STEP 7 Calculate the consumbtion using the old method
                # STEP 16 if when the internet was working it was 100 - 70 = 30 next time it will be 0 - 70 = -70 but it should stay 30
                # STEP 17 so even that the internet is not working but it will be the previous value because it will be 100 - 70 = 30
                new_rec = now_rec - last_rec
                new_sent = now_sent - last_sent
                new_total = now_total - last_total

                print(
                    f"-----> consuption each second  down {get_size(new_rec)} upload {get_size(new_sent)}  total{get_size(new_total)}")
                # STEP 8 Change them into units
                mb_rec = get_size(new_rec)
                mb_sent = get_size(new_sent)
                mb_total = get_size(new_total)

                self.ids.tot_con.text = mb_total
                self.ids.download_con.text = mb_rec
                self.ids.upload_con.text = mb_sent

                end_time= time.time() - last_time
                string_end_time=str(end_time).split(".")[0]

                with filelock:
                    csv_w.writerow(
                        {
                            'downCon': mb_rec,
                            'uplaodCon': mb_sent,
                            'totalCon': mb_total,
                            'first down': {get_size(last_rec)},
                            'first upload': {get_size(last_sent)},
                            'first total': {get_size(last_total)},
                            'bytes down': {get_size(bytes_rec)},
                            'bytes up': {get_size(bytes_sent)},
                            'debug r': {get_size(bytes_rec + rec_dup)},
                            'debug s': {get_size(bytes_sent + sent_dup)},
                            'rec_dup': rec_dup,
                            'sent_dup': sent_dup,
                            'nowr': nowr,
                            'pastr': pastr,
                            'result_r': result_r,
                            'nows': nows,
                            'pasts': pasts,
                            'bytes total': {get_size(bytes_total)},
                            'Start time': f"{string_start_time} ms",
                            'End time': f"{string_end_time} ms",
                            'cyper': cyper,
                            'diff': f"{end_time- start_time} ms",
                            'now down': now_rec,
                            'now sent': now_sent,
                            'now total': now_total,
                            'old rec': old_data_rec,
                            'old sent': old_data_sent,
                            'hyper': hyper,
                            'segma': segma

                        }
                    )
                    wt.flush()

                print(f"#######DownloadCon: {mb_rec}  UploadCon: {mb_sent}  TotalCon: {mb_total}")

                time.sleep(1)

        #         STEP 9 The internet disconnects
        #         STEP 18 internet is still not working
        #         STEP 25 hey internet is working
        #         STEP 32 internet disconnect again
